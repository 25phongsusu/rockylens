import { assetUrl } from '@/lib/utils';
import type { FaceAnalysisResult, FaceMetrics, FaceShape, Point2D } from './types';

type FaceLandmarkerInstance = import('@mediapipe/tasks-vision').FaceLandmarker;

let landmarkerPromise: Promise<FaceLandmarkerInstance> | null = null;
let currentRunningMode: 'IMAGE' | 'VIDEO' = 'IMAGE';

/**
 * Lazily initialize MediaPipe FaceLandmarker strictly in the browser
 * using self-hosted WASM and model assets.
 */
export async function getFaceLandmarker(
  mode: 'IMAGE' | 'VIDEO' = 'IMAGE'
): Promise<FaceLandmarkerInstance> {
  if (typeof window === 'undefined') {
    throw new Error('FaceLandmarker chỉ hoạt động trên trình duyệt.');
  }

  if (!landmarkerPromise) {
    currentRunningMode = mode;
    landmarkerPromise = (async () => {
      const vision = await import('@mediapipe/tasks-vision');
      const filesetResolver = await vision.FilesetResolver.forVisionTasks(
        assetUrl('/mediapipe/wasm')
      );

      return vision.FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath: assetUrl('/mediapipe/face_landmarker.task'),
          delegate: 'CPU',
        },
        runningMode: mode,
        numFaces: 1,
      });
    })().catch((err) => {
      landmarkerPromise = null;
      throw err;
    });
  }

  const instance = await landmarkerPromise;
  if (currentRunningMode !== mode) {
    await instance.setOptions({ runningMode: mode });
    currentRunningMode = mode;
  }

  return instance;
}

function getSourceDimensions(source: HTMLImageElement | HTMLVideoElement): {
  width: number;
  height: number;
} {
  if (source instanceof HTMLVideoElement) {
    return {
      width: source.videoWidth || source.clientWidth || 640,
      height: source.videoHeight || source.clientHeight || 480,
    };
  }
  return {
    width: source.naturalWidth || source.width || 640,
    height: source.naturalHeight || source.height || 480,
  };
}

/**
 * Resize image/video frame to <= maxWidth JPEG canvas for fast inference (<500ms).
 */
export function resizeToCanvas(
  source: HTMLImageElement | HTMLVideoElement,
  maxWidth = 960
): {
  canvas: HTMLCanvasElement;
  dataUrl: string;
  width: number;
  height: number;
} {
  const { width: srcW, height: srcH } = getSourceDimensions(source);
  if (!srcW || !srcH) {
    throw new Error('Không thể đọc kích thước ảnh hoặc khung hình camera.');
  }

  const scale = srcW > maxWidth ? maxWidth / srcW : 1;
  const width = Math.max(1, Math.round(srcW * scale));
  const height = Math.max(1, Math.round(srcH * scale));

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Trình duyệt không hỗ trợ Canvas 2D.');
  }

  ctx.drawImage(source, 0, 0, width, height);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);

  return { canvas, dataUrl, width, height };
}

function pixelDist(a: Point2D, b: Point2D, width: number, height: number): number {
  const dx = (a.x - b.x) * width;
  const dy = (a.y - b.y) * height;
  return Math.hypot(dx, dy);
}

function midpoint(a: Point2D, b: Point2D): Point2D {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function classifyFaceShape(metrics: {
  lengthToWidth: number;
  foreheadToCheek: number;
  jawToCheek: number;
  foreheadToJaw: number;
}): { faceShape: FaceShape; confidence: number } {
  const { lengthToWidth, foreheadToCheek, jawToCheek, foreheadToJaw } = metrics;

  if (lengthToWidth >= 1.48) {
    const excess = Math.min(0.16, lengthToWidth - 1.48);
    return { faceShape: 'oblong', confidence: Math.round(86 + excess * 60) };
  }

  if (lengthToWidth <= 1.22 && jawToCheek >= 0.8) {
    const softness = Math.min(0.12, 1.22 - lengthToWidth);
    return { faceShape: 'round', confidence: Math.round(85 + softness * 70) };
  }

  if (
    lengthToWidth <= 1.32 &&
    jawToCheek >= 0.86 &&
    Math.abs(foreheadToJaw - 1) <= 0.12
  ) {
    const balance = 0.12 - Math.abs(foreheadToJaw - 1);
    return { faceShape: 'square', confidence: Math.round(85 + balance * 75) };
  }

  if (foreheadToJaw >= 1.15 && jawToCheek <= 0.78) {
    const taper = Math.min(0.15, foreheadToJaw - 1.15);
    return { faceShape: 'heart', confidence: Math.round(85 + taper * 60) };
  }

  if (foreheadToCheek <= 0.88 && jawToCheek <= 0.82) {
    return { faceShape: 'diamond', confidence: 86 };
  }

  // Oval: balanced proportions (1.22 < lengthToWidth < 1.48)
  const centerDiff = Math.abs(lengthToWidth - 1.35);
  const ovalScore = Math.max(82, Math.min(95, Math.round(95 - centerDiff * 45)));
  return { faceShape: 'oval', confidence: ovalScore };
}

function estimateFrameSize(cheekboneWidthRatio: number): 'S' | 'M' | 'L' {
  if (cheekboneWidthRatio < 0.34) return 'S';
  if (cheekboneWidthRatio > 0.5) return 'L';
  return 'M';
}

/**
 * Analyze a portrait image or video frame with MediaPipe FaceLandmarker (478 points).
 */
export async function analyzeFaceFromSource(
  source: HTMLImageElement | HTMLVideoElement
): Promise<FaceAnalysisResult> {
  const { canvas, dataUrl, width, height } = resizeToCanvas(source, 960);
  const landmarker = await getFaceLandmarker();
  const result = landmarker.detect(canvas);

  const landmarks = result.faceLandmarks?.[0];
  if (!landmarks || landmarks.length < 455) {
    throw new Error(
      'Không phát hiện được khuôn mặt rõ nét. Vui lòng giữ mặt nhìn thẳng, đủ sáng và thử lại.'
    );
  }

  const pt = (index: number): Point2D => {
    const p = landmarks[index];
    return { x: p.x, y: p.y };
  };

  // Core anatomical landmarks from spec section 5.2
  const foreheadCenter = pt(10);
  const chin = pt(152);
  const foreheadLeft = pt(54);
  const foreheadRight = pt(284);
  const cheekLeft = pt(234);
  const cheekRight = pt(454);
  const jawLeft = pt(172);
  const jawRight = pt(397);

  // Eye centers: iris 468 / 473 when available, fallback to eye corner midpoints
  const leftEye =
    landmarks.length >= 474 ? pt(468) : midpoint(pt(33), pt(133));
  const rightEye =
    landmarks.length >= 474 ? pt(473) : midpoint(pt(362), pt(263));
  const noseBridge = pt(168);

  const rawFaceLength = pixelDist(foreheadCenter, chin, width, height);
  // Extend upward ~14% to approximate hairline above landmark 10
  const faceLength = rawFaceLength * 1.14;
  const foreheadWidth = pixelDist(foreheadLeft, foreheadRight, width, height);
  const cheekboneWidth = Math.max(
    1,
    pixelDist(cheekLeft, cheekRight, width, height)
  );
  const jawWidth = Math.max(1, pixelDist(jawLeft, jawRight, width, height));

  const lengthToWidth = Number((faceLength / cheekboneWidth).toFixed(2));
  const foreheadToCheek = Number((foreheadWidth / cheekboneWidth).toFixed(2));
  const jawToCheek = Number((jawWidth / cheekboneWidth).toFixed(2));
  const foreheadToJaw = Number((foreheadWidth / jawWidth).toFixed(2));

  const { faceShape, confidence } = classifyFaceShape({
    lengthToWidth,
    foreheadToCheek,
    jawToCheek,
    foreheadToJaw,
  });

  const foreheadTop: Point2D = {
    x: foreheadCenter.x,
    y: Math.max(0.02, foreheadCenter.y - (chin.y - foreheadCenter.y) * 0.14),
  };

  const cheekboneWidthRatio = cheekboneWidth / width;

  const metrics: FaceMetrics = {
    lengthToWidth,
    foreheadToCheek,
    jawToCheek,
    foreheadToJaw,
    confidence,
    frameSize: estimateFrameSize(cheekboneWidthRatio),
    leftEye,
    rightEye,
    noseBridge,
    cheekboneWidthRatio,
    keyPoints: {
      foreheadTop,
      chin,
      foreheadLeft,
      foreheadRight,
      cheekLeft,
      cheekRight,
      jawLeft,
      jawRight,
    },
  };

  return {
    faceShape,
    metrics,
    source: 'ai',
    imageDataUrl: dataUrl,
    imageWidth: width,
    imageHeight: height,
  };
}

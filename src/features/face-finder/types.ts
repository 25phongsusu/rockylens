import type { LensCategory } from '@/features/products/product-types';

export type FaceShape =
  | 'oval'
  | 'round'
  | 'square'
  | 'heart'
  | 'diamond'
  | 'oblong';

export type UsageNeed =
  | 'computer'
  | 'outdoor'
  | 'night-driving'
  | 'progressive'
  | 'kids-myopia'
  | 'rimless';

export type PrescriptionLevel = 'low' | 'medium' | 'high';

export type StylePreference = 'minimal' | 'classic' | 'modern' | 'sport';

export type FrameStyleId =
  | 'square'
  | 'rectangle'
  | 'round'
  | 'oval'
  | 'cat-eye'
  | 'aviator'
  | 'browline'
  | 'rimless';

export interface Point2D {
  x: number;
  y: number;
}

export interface FaceMetrics {
  lengthToWidth: number;
  foreheadToCheek: number;
  jawToCheek: number;
  foreheadToJaw: number;
  confidence: number;
  frameSize: 'S' | 'M' | 'L';
  leftEye: Point2D;
  rightEye: Point2D;
  noseBridge: Point2D;
  cheekboneWidthRatio: number;
  keyPoints: {
    foreheadTop: Point2D;
    chin: Point2D;
    foreheadLeft: Point2D;
    foreheadRight: Point2D;
    cheekLeft: Point2D;
    cheekRight: Point2D;
    jawLeft: Point2D;
    jawRight: Point2D;
  };
}

export interface FaceAnalysisResult {
  faceShape: FaceShape;
  metrics?: FaceMetrics;
  source: 'ai' | 'manual';
  imageDataUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface FaceShapeProfile {
  id: FaceShape;
  nameVi: string;
  nameEn: string;
  shortDesc: string;
  recommendedFrames: FrameStyleId[];
  recommendedFrameLabels: string[];
  avoidFrames: string[];
  fitReason: string;
  defaultFrameId: FrameStyleId;
}

export interface FrameStyleOption {
  id: FrameStyleId;
  name: string;
  description: string;
  imageSrc?: string;
  isRimless?: boolean;
}

export interface LensTintOption {
  id: string;
  name: string;
  color: string;
  tintRgba: string;
  category: 'standard' | 'photochromic' | 'polarized' | 'driveshield' | 'fashion';
  description: string;
  lensType: string;
}

export interface FrameColorOption {
  id: string;
  name: string;
  stroke: string;
  accent?: string;
  lensTint: string;
}

export interface UsageNeedOption {
  id: UsageNeed;
  title: string;
  subtitle: string;
  badge: string;
}

export interface PrescriptionOption {
  id: PrescriptionLevel;
  title: string;
  range: string;
  recommendedIndex: string;
  desc: string;
}

export interface StyleOption {
  id: StylePreference;
  title: string;
  desc: string;
}

export interface ProductSummary {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  shortDescription: string;
  featuredImage: string;
  refractiveIndex?: string;
  price?: number;
  formattedPrice?: string;
  badge?: string;
  categoryIds: LensCategory[];
  coating?: string;
  uvProtection?: string;
}

export interface QuizState {
  analysis: FaceAnalysisResult | null;
  needs: UsageNeed[];
  prescription: PrescriptionLevel;
  style?: StylePreference;
}

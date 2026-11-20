'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video } from 'lucide-react';
import { assetUrl } from '@/lib/utils';

interface LazyVideoPlayerProps {
  videoUrl: string;
  title?: string;
  posterImage?: string;
}

export function getEmbedVideoUrl(url: string): string {
  // Google Drive: https://drive.google.com/file/d/<ID>/view... -> /preview
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }

  // YouTube: watch?v=<ID> or youtu.be/<ID>
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }

  return url;
}

export default function LazyVideoPlayer({
  videoUrl,
  title = 'Video Trải Nghiệm Thực Tế Sản Phẩm',
  posterImage,
}: LazyVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = getEmbedVideoUrl(videoUrl);

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4 sm:p-5 shadow-xs space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[var(--site-bg-middle)] text-[var(--button-middle)]">
            <Video className="w-4 h-4" />
          </span>
          <h3 className="text-sm sm:text-base font-bold text-heading">
            {title}
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
          Video Thực Tế
        </span>
      </div>

      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-sm">
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative w-full h-full flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label={`Phát ${title}`}
          >
            {posterImage ? (
              <Image
                src={assetUrl(posterImage)}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C5E] to-[#1D7E9A]" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/30 to-slate-950/20 transition-opacity group-hover:opacity-90" />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-[var(--button-middle)] group-hover:bg-[var(--button-start)] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(29,126,154,0.5)] transition-all duration-300 group-hover:scale-110">
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </div>
              <span className="px-3.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                Bấm để xem video thực tế
              </span>
            </div>
          </button>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

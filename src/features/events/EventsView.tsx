'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  Building,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  X,
  ChevronLeft,
  CheckCircle2,
  Phone,
  MessageSquare,
  Maximize2,
  Filter,
} from 'lucide-react';
import {
  eventsList,
  eventCategories,
  allGalleryPhotos,
  EventItem,
} from './event-data';
import B2BQuoteButton from '@/components/common/B2BQuoteButton';
import { openB2BQuoteModal } from '@/components/common/B2BQuoteModal';

export default function EventsView() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter events based on activeCategory
  const filteredEvents =
    activeCategory === 'all'
      ? eventsList
      : eventsList.filter((e) => e.category === activeCategory);

  // Lightbox navigation helpers
  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allGalleryPhotos.length) % allGalleryPhotos.length);
    }
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allGalleryPhotos.length);
    }
  };

  return (
    <div className="space-y-16">
      {/* ========================================================= */}
      {/* 1. CATEGORY FILTER TABS                                   */}
      {/* ========================================================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[var(--color-border)]/70 pb-6">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-500 hidden md:inline shrink-0" />
          {eventCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[var(--b2b-end)] text-white shadow-sm'
                    : 'bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="text-xs sm:text-sm text-slate-500 font-medium">
          Hiển thị <span className="font-bold text-slate-800">{filteredEvents.length}</span> chuyên đề sự kiện
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. MAIN EVENT CARDS GRID                                  */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEvents.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col rounded-3xl bg-white border border-[var(--color-border)]/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Event Cover Image */}
            <div
              className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.coverImage}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white shadow-xs">
                  {event.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {event.year}
                </span>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-1.5 truncate drop-shadow-md">
                  <MapPin className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-xs">
                  <Calendar className="w-3.5 h-3.5 text-cyan-200" />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>

            {/* Event Body Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {event.categoryLabel}
                </div>
                <h2
                  onClick={() => setSelectedEvent(event)}
                  className="text-lg sm:text-xl font-bold text-heading leading-snug group-hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                >
                  {event.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {event.summary}
                </p>
              </div>

              {/* Stats Highlights */}
              {event.stats && (
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-[var(--site-bg-middle)]/30 border border-[var(--color-border)]/50">
                  {event.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm sm:text-base font-black text-[var(--color-primary)]">
                        {st.value}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium truncate">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery Mini Previews */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700">
                  Khoảnh khắc thực tế ({event.gallery.length} ảnh):
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {event.gallery.slice(0, 4).map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedEvent(event)}
                      className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 cursor-pointer group/thumb"
                    >
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform group-hover/thumb:scale-110"
                      />
                      {idx === 3 && event.gallery.length > 4 && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex items-center justify-center text-white text-xs font-bold">
                          +{event.gallery.length - 3}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors cursor-pointer"
                >
                  <span>Xem Chi Tiết Sự Kiện</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={openB2BQuoteModal}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  Liên Hệ Phối Hợp
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ========================================================= */}
      {/* 3. PHOTO MOMENTS LIGHTBOX GALLERY                         */}
      {/* ========================================================= */}
      <section className="space-y-8 pt-8 border-t border-[var(--color-border)]/70">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/50">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Thư Viện Khoảnh Khắc Thực Tế</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Hình Ảnh Hoạt Động &amp; Sự Kiện Rocky Lens
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md">
            Toàn bộ tư liệu ảnh thực tế tại các kỳ Hội nghị Nhãn khoa Việt Nam, hành trình trao kính học đường và các khóa đào tạo đại lý.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {allGalleryPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-2xs hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider">
                  {photo.tag}
                </span>
                <span className="text-xs font-semibold line-clamp-1">
                  {photo.title}
                </span>
              </div>
              <div className="absolute top-2 right-2 p-1 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CO-HOST & PARTNERSHIP B2B CARD                         */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--b2b-end)] via-[#002433] to-[#001722] text-white p-8 sm:p-12 border border-slate-700/50 shadow-xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            <span>Đồng Hành Phụng Sự &amp; Hợp Tác Chuyên Môn</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            Bạn Muốn Phối Hợp Tổ Chức Sự Kiện Cùng Rocky Lens?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ phôi tròng kính, trang thiết bị đo khám thị lực và tài liệu chuyên môn cho các bệnh viện mắt, phòng khám khúc xạ, chuỗi mắt kính đại lý và các đơn vị thiện nguyện tổ chức chương trình cộng đồng hoặc hội thảo khoa học.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <B2BQuoteButton className="button-primary px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer">
              Đăng Ký Phối Hợp Tổ Chức
            </B2BQuoteButton>

            <a
              href="tel:0933102653"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              <span>Hotline B2B: 0933 102 653</span>
            </a>

            <a
              href="https://zalo.me/0933102653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0088cc]/80 hover:bg-[#0088cc] text-white font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Zalo Trao Đổi Sự Kiện</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. MODAL: EVENT DETAIL OVERLAY                            */}
      {/* ========================================================= */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white text-slate-800 shadow-2xl border border-slate-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative aspect-16/9 w-full bg-slate-900">
              <img
                src={selectedEvent.coverImage}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white">
                  {selectedEvent.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight drop-shadow-md">
                  {selectedEvent.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    {selectedEvent.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-cyan-300" />
                    {selectedEvent.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-4 h-4 text-cyan-300" />
                    {selectedEvent.venue}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Event Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {selectedEvent.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Highlights */}
              <div className="p-5 rounded-2xl bg-[var(--site-bg-middle)]/30 border border-[var(--color-border)]/60 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-primary)] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Điểm Nhấn Sự Kiện</span>
                </h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {selectedEvent.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--color-primary)] font-bold mt-0.5">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo Gallery inside Modal */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-heading">
                  Hình ảnh thực tế tại sự kiện:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedEvent.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="group/img relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200 bg-slate-100"
                    >
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity p-2 flex items-end text-white text-[11px] leading-tight">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner Callout */}
              {selectedEvent.partnerCallout && (
                <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-medium">
                  {selectedEvent.partnerCallout}
                </div>
              )}

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEvent(null);
                    openB2BQuoteModal();
                  }}
                  className="button-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  Liên Hệ Hợp Tác Sự Kiện
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. MODAL: FULLSCREEN LIGHTBOX FOR PHOTO MOMENTS           */}
      {/* ========================================================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Lightbox */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Photo Button */}
          <button
            type="button"
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer hidden sm:flex"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Photo Button */}
          <button
            type="button"
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer hidden sm:flex"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allGalleryPhotos[lightboxIndex].src}
              alt={allGalleryPhotos[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white space-y-1 max-w-xl px-4">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                {allGalleryPhotos[lightboxIndex].tag} ({lightboxIndex + 1}/{allGalleryPhotos.length})
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {allGalleryPhotos[lightboxIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {allGalleryPhotos[lightboxIndex].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

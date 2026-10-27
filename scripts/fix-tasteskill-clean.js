import fs from 'fs';

let content = fs.readFileSync('scripts/build-unified-liquid-master.js', 'utf-8');

// 1. Fix Contrast: "Phân phối độc quyền bởi Clearly Vietnam"
content = content.replace(
  '<span class="text-slate-600 font-medium text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>',
  '<span class="text-slate-300 font-medium text-base hidden sm:inline">Phân phối độc quyền bởi Clearly Vietnam</span>'
);

// 2. Fix [icon-cards] and [outlined-box] in Section 5
const oldSection5Icons = `            <!-- 4 Icons / Value Points in 2x2 Grid -->
            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Tính năng ưu việt bảo vệ mắt toàn diện
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Đa dạng hóa nhu cầu người tiêu dùng
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Giải pháp thị lực ở mọi phân khúc giá
                </div>
              </div>

              <div class="bg-white p-5 rounded-2xl shadow-xs border border-slate-200/80 space-y-2 text-center flex flex-col items-center justify-center">
                <div class="w-10 h-10 rounded-full bg-teal-50 text-[#0B7B8A] flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </div>
                <div class="text-xs font-bold text-[#0E253A] leading-snug">
                  Sản phẩm đạt chất lượng quốc tế
                </div>
              </div>
            </div>`;

const newSection5Icons = `            <!-- 4 Value Points in Clean Typographic Box (No icon-cards, No outlined-box) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Tính năng ưu việt bảo vệ mắt toàn diện</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Đa dạng hóa nhu cầu người tiêu dùng</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Giải pháp thị lực ở mọi phân khúc giá</span>
              </div>
              <div class="p-4 rounded-2xl bg-white flex items-center gap-3 shadow-xs">
                <span class="w-2.5 h-2.5 rounded-full bg-[#0B7B8A] shrink-0"></span>
                <span class="text-sm font-bold text-[#0E253A]">Sản phẩm đạt chất lượng quốc tế</span>
              </div>
            </div>`;

content = content.replace(oldSection5Icons, newSection5Icons);

// 3. Remove all 1px outlines from certificates and partner boxes in Section 5
content = content.replaceAll(
  'border border-slate-200/80',
  ''
);

content = content.replaceAll(
  'border border-slate-200/90',
  ''
);

// 4. Remove hairline divider line above partners
content = content.replace(
  '<!-- Part B: Đối tác của chúng tôi (Image 2) -->\n        <div class="pt-8 border-t border-slate-200/80 space-y-6">',
  '<!-- Part B: Đối tác của chúng tôi (Image 2) -->\n        <div class="pt-12 space-y-6">'
);

// 5. Fix [small-text]: Replace text-xs with text-[13px] or text-sm
// Specifically replace text-xs in badges and descriptions
content = content.replaceAll(
  'text-xs font-bold',
  'text-[13px] font-bold'
);

content = content.replaceAll(
  'text-xs font-semibold',
  'text-[13px] font-semibold'
);

content = content.replaceAll(
  'text-xs',
  'text-sm'
);

// Replace any remaining border-teal-200/60
content = content.replaceAll(
  'border border-teal-200/60',
  ''
);

fs.writeFileSync('scripts/build-unified-liquid-master.js', content, 'utf-8');
console.log('Successfully cleaned tasteskill triggers in scripts/build-unified-liquid-master.js');

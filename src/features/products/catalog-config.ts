/**
 * Static catalog groupings, filter tabs, and query parameter mappings
 * for the Rocky Lens product catalogue (`/trong-kinh/`).
 */

export type ViewMode = 'need' | 'tech';

export interface CatalogItem {
  slug: string;
  group: string;
  title?: string;
}

export interface CatalogFilter {
  id: string;
  label: string;
  dotColor?: string;
}

export const NEED_CATALOG: CatalogItem[] = [
  { slug: 'rocky-156-bluecut-shmc', group: 'lam-viec', title: 'DÀNH CHO DESIGNER & ĐỒ HỌA MÁY TÍNH' },
  { slug: 'rocky-trendy-photochromic-grey', group: 'lam-viec', title: 'DÀNH CHO DÂN VĂN PHÒNG & LÀM VIỆC MÁY TÍNH' },
  { slug: 'rocky-167-ultra-thin-bluecut', group: 'ngoai-troi', title: 'DÀNH CHO NGƯỜI HAY HOẠT ĐỘNG NGOÀI TRỜI' },
  { slug: 'rocky-driveshield-night-vision', group: 'ngoai-troi', title: 'DÀNH CHO TÀI XẾ & NGƯỜI HAY LÁI XE BAN ĐÊM' },
  { slug: 'rocky-freeform-progressive-hd', group: 'lam-viec', title: 'DÀNH CHO NGƯỜI LỚN TUỔI & LÃO THỊ' },
  { slug: 'rocky-myocontrol-dims-kids', group: 'chuyen-biet', title: 'DÀNH CHO TRẺ EM & HỌC SINH CẬN THỊ' },
  { slug: 'rocky-chameleon-photochromic', group: 'ngoai-troi', title: 'DÀNH CHO TÍN ĐỒ THỜI TRANG' },
  { slug: 'rocky-160-mr8-aspheric', group: 'chuyen-biet', title: 'DÀNH CHO NGƯỜI ĐEO GỌNG KHOAN, KHÔNG VIỀN' },
  { slug: 'rocky-174-ultra-high-index', group: 'chuyen-biet', title: 'DÀNH CHO NGƯỜI ĐỘ CẬN VIỄN NẶNG' },
];

export const TECH_CATALOG: CatalogItem[] = [
  { slug: 'rocky-anh-sang-xanh-bluecut', group: 'asx' },
  { slug: 'rocky-smart-bluecontrol', group: 'asx' },
  { slug: 'rocky-doi-mau-trendy', group: 'doi-mau' },
  { slug: 'rocky-doi-mau-smart', group: 'doi-mau' },
  { slug: 'rocky-doi-mau-edition', group: 'doi-mau' },
  { slug: 'rocky-chong-tia-uv-167', group: 'uv' },
  { slug: 'rocky-kinh-khoan-chong-va-dap', group: 'kinh-khoan' },
  { slug: 'rocky-driveshield-ruby', group: 'lai-xe' },
  { slug: 'rocky-hai-trong-invisible', group: 'da-trong' },
  { slug: 'rocky-da-trong-freeform', group: 'da-trong' },
  { slug: 'rocky-myopia-control', group: 'myopia' },
];

export const NEED_FILTERS: CatalogFilter[] = [
  { id: 'all', label: 'Tất cả nhu cầu (9 giải pháp)' },
  { id: 'lam-viec', label: 'Làm việc & Đồ họa' },
  { id: 'ngoai-troi', label: 'Ngoài trời & Lái xe' },
  { id: 'chuyen-biet', label: 'Chuyên biệt (Lão thị, Trẻ em, Gọng khoan)' },
];

export const TECH_FILTERS: CatalogFilter[] = [
  { id: 'all', label: 'Tất cả 11 tính năng' },
  { id: 'asx', label: 'Ánh sáng xanh', dotColor: '#1d96b8' },
  { id: 'doi-mau', label: 'Đổi màu quang học', dotColor: '#714693' },
  { id: 'uv', label: 'Chống tia UV 1.67', dotColor: '#d97706' },
  { id: 'kinh-khoan', label: 'Kính khoan & Chống vỡ', dotColor: '#5a798c' },
  { id: 'lai-xe', label: 'Lái xe DriveShield', dotColor: '#be123c' },
  { id: 'da-trong', label: 'Đa tròng & Hai tròng', dotColor: '#8c261d' },
  { id: 'myopia', label: 'Kiểm soát cận thị', dotColor: '#21729b' },
];

export const CATEGORY_PARAM_MAP: Record<string, { mode: ViewMode; filter: string }> = {
  'don-trong': { mode: 'tech', filter: 'asx' },
  asx: { mode: 'tech', filter: 'asx' },
  'da-trong': { mode: 'tech', filter: 'da-trong' },
  'doi-mau': { mode: 'tech', filter: 'doi-mau' },
  'lai-xe': { mode: 'tech', filter: 'lai-xe' },
  'kiem-soat-can-thi': { mode: 'tech', filter: 'myopia' },
  myopia: { mode: 'tech', filter: 'myopia' },
  uv: { mode: 'tech', filter: 'uv' },
  'kinh-khoan': { mode: 'tech', filter: 'kinh-khoan' },
};

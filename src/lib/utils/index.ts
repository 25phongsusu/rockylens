const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function assetUrl(src: string): string {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src;
  if (BASE_PATH && (src === BASE_PATH || src.startsWith(`${BASE_PATH}/`))) return src;
  return `${BASE_PATH}${src.startsWith('/') ? '' : '/'}${src}`;
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

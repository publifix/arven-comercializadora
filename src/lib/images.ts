import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export const PHOTO_WIDTHS = [480, 640, 800, 1024, 1280];

/** Genera los srcset AVIF y WebP (y un respaldo JPEG) para una foto. */
export async function responsive(src: ImageMetadata, widths: number[] = PHOTO_WIDTHS, quality = 62) {
  const usable = widths.filter((w) => w <= src.width);
  const [avif, webp, fallback] = await Promise.all([
    getImage({ src, format: 'avif', widths: usable, quality: quality - 10 }),
    getImage({ src, format: 'webp', widths: usable, quality }),
    getImage({ src, format: 'jpg', width: Math.min(1024, src.width), quality: quality + 8 }),
  ]);
  return {
    avif: avif.srcSet.attribute,
    webp: webp.srcSet.attribute,
    fallback: fallback.src,
    width: src.width,
    height: src.height,
  };
}

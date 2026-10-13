// Elimina de dist/_astro las imágenes originales que Astro emite pero que ninguna página usa
// (las fotos se sirven como AVIF/WebP/JPEG optimizados).
import { readdir, readFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const assets = join(dist, '_astro');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(html|css|js|xml|webmanifest|json|txt)$/.test(entry.name)) out.push(p);
  }
  return out;
}

const texts = (await Promise.all((await walk(dist)).map((f) => readFile(f, 'utf8')))).join('\n');
let freed = 0;
for (const name of await readdir(assets)) {
  if (!/\.(png|jpe?g)$/i.test(name) || texts.includes(name)) continue;
  freed += (await stat(join(assets, name))).size;
  await rm(join(assets, name));
}
console.log(`[prune] ${(freed / 1024 / 1024).toFixed(1)} MB de originales sin uso eliminados`);

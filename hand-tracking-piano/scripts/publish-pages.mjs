import { cpSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

for (const name of ['assets', 'wasm', 'models']) {
  rmSync(join(root, name), { recursive: true, force: true });
  cpSync(join(dist, name), join(root, name), { recursive: true });
}

cpSync(join(dist, 'index.html'), join(root, 'index.html'));

console.log('Published build to project root for GitHub Pages.');

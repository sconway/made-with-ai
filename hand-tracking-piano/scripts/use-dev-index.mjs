import { cpSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceIndex = join(root, 'index.source.html');
const devIndex = join(root, 'index.html');

if (existsSync(sourceIndex)) {
  cpSync(sourceIndex, devIndex);
}

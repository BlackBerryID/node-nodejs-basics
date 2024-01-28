import { rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    await rm(join(__dirname, 'files', 'fileToRemove.txt'))
  } catch (err) {
    if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
    } else {
        throw err
    }
  }
};

await remove();
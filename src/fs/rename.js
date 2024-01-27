import { rename as renameFunc, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    let file;

    try {
      file = await stat(join(__dirname, 'files', 'properFilename.md'))
    } catch (err) {
    } finally {
      if (file?.isFile()) {
        throw new Error('FS operation failed')
      }
    }

    try {
      await renameFunc(join(__dirname, 'files', 'wrongFilename.txt'), join(__dirname, 'files', 'properFilename.md'))
    } catch (err) {
      if (err.code === 'ENOENT') {
        throw new Error('FS operation failed')
      } else {
        throw err
      }
    }
};

await rename();
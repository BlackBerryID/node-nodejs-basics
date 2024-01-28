import { cp } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
      await cp(join(__dirname, 'files'), join(__dirname, 'files_copy'), {recursive: true, force: false, errorOnExist: true})
    } catch (err) {
      if (err.code === 'ENOENT' || err.code === 'ERR_FS_CP_EEXIST') {
        throw new Error('FS operation failed')
      } else {
        throw err
      }
    }
};

await copy();

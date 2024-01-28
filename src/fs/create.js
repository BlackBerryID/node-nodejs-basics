import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    try {
      await writeFile(join(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', {flag: 'wx'})
    } catch (err) {
      if (err.code === 'EEXIST') {
        throw new Error('FS operation failed')
      } else {
        throw err
      }
    }
};

await create();
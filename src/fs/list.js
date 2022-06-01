import {readdir} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const list = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const folderPath = path.join(__dirname, 'files')

        const files = await readdir(folderPath)
        console.log(files)
    } catch(err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    }   
};

await list()

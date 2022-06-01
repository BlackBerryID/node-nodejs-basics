import {rename as fspromiseRename} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const rename = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const folderPath = path.join(__dirname, 'files')

        await fspromiseRename(`${folderPath}/wrongFilename.txt`, `${folderPath}/properFilename.md`)
    } catch(err) {
        if (err.code === 'EEXIST' || err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    }  
};

await rename()

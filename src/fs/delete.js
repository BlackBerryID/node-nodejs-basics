import {rm} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const remove = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const folderPath = path.join(__dirname, 'files')

        await rm(`${folderPath}/fileToRemove.txt`)
    } catch(err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    }   
};

await remove()

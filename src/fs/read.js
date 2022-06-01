
import {readFile} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const read = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const folderPath = path.join(__dirname, 'files')

        const file = await readFile(`${folderPath}/fileToRead.txt`, 'utf-8')
        console.log(file)
    } catch(err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    }  
};

await read()

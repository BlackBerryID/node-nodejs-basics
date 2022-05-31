import {writeFile} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const create = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const pathName = path.join(__dirname, '/files/fresh.txt')
    
        await writeFile(pathName, 'I am fresh and young', {encoding: 'utf-8', flag: 'wx'})
    } catch(err) {
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    }
};

await create()

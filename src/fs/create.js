import {writeFile} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const create = async () => {

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const pathName = path.join(__dirname, '/files/fresh.txt')

    writeFile(pathName, 'I am fresh and young', {encoding: 'utf-8', flag: 'wx'}, (err) => {
        if (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed')
            }
    }})
};

await create()

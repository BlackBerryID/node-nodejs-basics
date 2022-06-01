
import {readdir, mkdir, copyFile} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const copy = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const folderPath = path.join(__dirname, 'files')
        const targetFolderPath = `${folderPath}_copy`

        const files = await readdir(folderPath)
        await mkdir(targetFolderPath)
        files.forEach(file => copyFile(`${folderPath}/${file}`, `${targetFolderPath}/${file}`))
    } catch(err) {
        if (err.code === 'EEXIST' || err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            throw err
        }
    } 
};

await copy()

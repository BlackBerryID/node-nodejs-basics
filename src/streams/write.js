import { stdin } from 'process';
import { createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileName = path.join(__dirname, 'files', 'fileToWrite.txt')

    const ws = createWriteStream(fileName)
    stdin.pipe(ws)
};

await write()

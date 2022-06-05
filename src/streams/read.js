import { stdout } from 'process';
import { createReadStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileName = path.join(__dirname, 'files', 'fileToRead.txt')

    const rs = createReadStream(fileName)
    rs.pipe(stdout)
};

await read()

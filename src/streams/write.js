import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'))
    stdin.pipe(writeStream)
}

await write();
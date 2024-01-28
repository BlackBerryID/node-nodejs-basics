import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const readStrem = createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
    readStrem.pipe(process.stdout)
};

await read();
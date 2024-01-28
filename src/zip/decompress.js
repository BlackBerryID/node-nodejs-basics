import { createGunzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const gzip = createGunzip();
    const readStream = createReadStream(join(__dirname, 'files', 'archive.gz'))
    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'))

    readStream.pipe(gzip).pipe(writeStream)
};

await decompress();
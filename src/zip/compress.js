import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const gzip = createGzip();
    const readStream = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'))
    const writeStream = createWriteStream(join(__dirname, 'files', 'archive.gz'))

    readStream.pipe(gzip).pipe(writeStream)
};

await compress();
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const compressFileName = path.join(__dirname, 'files', 'fileToCompress.txt')
    const archiveFileName = path.join(__dirname, 'files', 'archive.gz')

    const gzip = createGzip()
    const rs = createReadStream(compressFileName)
    const ws = createWriteStream(archiveFileName)

    pipeline(
        rs,
        gzip,
        ws,
        err => {
            if(err) {
                console.log(err)
            }
        }
    )
};

await compress()

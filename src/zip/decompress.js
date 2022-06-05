import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const archiveFileName = path.join(__dirname, 'files', 'archive.gz')
    const decompressFileName = path.join(__dirname, 'files', 'fileToCompress.txt')

    const gunzip = createGunzip()
    const rs = createReadStream(archiveFileName)
    const ws = createWriteStream(decompressFileName)

    pipeline(
        rs,
        gunzip,
        ws,
        err => {
            if(err) {
                console.log(err)
            }
        }
    )
};

await decompress()

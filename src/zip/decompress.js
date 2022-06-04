import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const gunzip = createGunzip()
    const rs = createReadStream('./files/archive.gz')
    const ws = createWriteStream('./files/fileToCompress.txt')

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

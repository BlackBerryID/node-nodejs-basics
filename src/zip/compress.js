import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';


const compress = async () => {
    const gzip = createGzip()
    const rs = createReadStream('./files/fileToCompress.txt')
    const ws = createWriteStream('./files/archive.gz')

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

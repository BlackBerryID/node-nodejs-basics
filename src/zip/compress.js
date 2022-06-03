<<<<<<< HEAD
const compress = async () => {
    // Write your code here 
};

await compress();
=======
import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';


export const compress = async () => {
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

compress()
>>>>>>> 97adf26 (feat: done zip/compress.js)

import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
    transform(chunk, encoding, cb) {
        cb(null, chunk.toString('utf-8').split('').reverse().join('') + '\n')
    }
})

    stdin.pipe(transformStream).pipe(stdout)
};

await transform();
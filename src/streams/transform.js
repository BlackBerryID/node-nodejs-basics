import { stdin, stdout } from 'process';
import { pipeline, Transform } from 'stream';

const transform = async () => {

    const innerTransform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStringified = chunk.toString().trim()

            const reverseChunk = chunkStringified.split('').reverse().join('')

            this.push(reverseChunk + '\n')
            callback()
        }
    })

     pipeline(
         stdin,
         innerTransform,
         stdout,
         err => console.log(err)
     )
};

await transform()

import { createHash } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const hash = createHash('sha256')

    const input = createReadStream(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    input.on('readable', () => {
      
      const data = input.read();
      if (data)
        hash.update(data);
      else {
        console.log(hash.digest('hex'));
      }
    });

};

await calculateHash();
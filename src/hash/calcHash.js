import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileName = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

    const file = await readFile(fileName)
    const hashSum = createHash('sha256')
    hashSum.update(file)
    const hex = hashSum.digest('hex')
    console.log(hex)
};

await calculateHash()

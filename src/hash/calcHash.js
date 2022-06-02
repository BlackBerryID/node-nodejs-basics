import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    const file = await readFile('./files/fileToCalculateHashFor.txt')
    const hashSum = createHash('sha256')
    hashSum.update(file)
    const hex = hashSum.digest('hex')
    console.log(hex)
};

await calculateHash()

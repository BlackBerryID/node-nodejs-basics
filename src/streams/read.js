<<<<<<< HEAD
const read = async () => {
    // Write your code here 
};

await read();
=======
import { stdout } from 'process';
import { createReadStream } from 'fs';

export const read = async () => {
    const rs = createReadStream('./files/fileToRead.txt')
    rs.pipe(stdout)
};

read()
>>>>>>> f4d4289 (feat: done streams/read.js)

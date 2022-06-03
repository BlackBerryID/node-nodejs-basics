import { stdout } from 'process';
import { createReadStream } from 'fs';

const read = async () => {
    const rs = createReadStream('./files/fileToRead.txt')
    rs.pipe(stdout)
};

await read()

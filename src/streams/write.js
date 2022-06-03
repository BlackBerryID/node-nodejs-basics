import { stdin } from 'process';
import { createWriteStream } from 'fs';

const write = async () => {
    const ws = createWriteStream('./files/fileToWrite.txt')
    stdin.pipe(ws)
};

await write()

import { fork } from 'child_process';
import { stdin, stdout } from 'process';
import path from 'path';
import {fileURLToPath} from 'url';

const args = process.argv.slice(2);

const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileName = path.join(__dirname, 'files', 'script.js')

    fork(fileName, args, {stdio: [stdin, stdout, 'ipc']})
};

spawnChildProcess(args)

import { fork } from 'child_process';
import { stdin, stdout } from 'process';

const args = process.argv.slice(2);

const spawnChildProcess = async (args) => {
    fork('./files/script.js', args, {stdio: [stdin, stdout, 'ipc']})
};

spawnChildProcess(args)

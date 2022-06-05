import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import {fileURLToPath} from 'url';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const fileName = path.join(__dirname, 'worker.js')

    const cpuCoresNumber = cpus().length
    const resultArr = []
    for (let i = 0; i < cpuCoresNumber; i++) {
        resultArr.push(new Promise((resolve, reject) => {
            const worker = new Worker(fileName, { workerData: i + 10})
            worker.on('message', resolve)
            worker.on('error', reject)
        }))
    }

    const transformWorkerThreadResult = (result) => {
        const copyObj = {...result}
        if (result.status === 'fulfilled') {
            copyObj.status = 'resolved'
            copyObj.data = copyObj.value
            delete copyObj.value
        } else if (result.status === 'rejected') {
            copyObj.status = 'error'
            copyObj.data = null
            delete copyObj.reason
        }
        return copyObj
    }

    Promise.allSettled(resultArr).then(results => console.log(results.map(result => transformWorkerThreadResult(result))))
};

await performCalculations()

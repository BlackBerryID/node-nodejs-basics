import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
    const cpuCoresNumber = cpus().length
    const resultArr = []
    for (let i = 0; i < cpuCoresNumber; i++) {
        resultArr.push(new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', { workerData: i + 10})
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

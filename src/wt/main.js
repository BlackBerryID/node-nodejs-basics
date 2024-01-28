import { cpus } from 'os';
import { Worker, isMainThread } from 'worker_threads';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    if (isMainThread) {
        const cpusArray = cpus()

        const promises = cpusArray.map((_, index) => {
            return new Promise((resolve, reject) => {
                const worker = new Worker(join(__dirname, 'worker.js'))
                worker.postMessage(10 + index)

                worker.on('message', resolve);
                worker.on('error', reject);
            })
        })

        const promisesResult = await Promise.allSettled(promises)


        const result = promisesResult.map(item => {
            if (item.status === 'fulfilled') {
                item.status = 'resolved'
                item.data = item.value
                delete item.value
            } else if (item.status === 'rejected') {
                item.status = 'error'
                item.data = null
                delete item.reason
            }
                        
            return item
        })

        console.log(result)
    }
};

await performCalculations();
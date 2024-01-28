const parseArgs = () => {
    let result = process.argv
    result.shift()
    result.shift()

    result = result.map((item, index, arr) => {
        if (item.startsWith('--')) {
            return `${item.replace('--', '')} is ${arr[index + 1]}`
        } else {
            return ''
        }
    }).filter(item => item !== '').join(', ')
    console.log(result) 
};

parseArgs();
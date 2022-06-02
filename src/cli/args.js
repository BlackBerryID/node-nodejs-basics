const parseArgs = () => {
    const args = process.argv.slice(2)
    const tempArr = []
    args.forEach((item, index) => {
        if (item.startsWith('--')) {
            tempArr.push(`${item.slice(2)} is ${args[index + 1]}`)
        }
    })
    const result = tempArr.join(', ')
    console.log(result)
};

parseArgs()

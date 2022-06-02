<<<<<<< HEAD
const parseEnv = () => {
    // Write your code here 
};

parseEnv();
=======
export const parseEnv = () => {
    let envArray = Object.entries(process.env)
    const tempArr = []
    envArray = envArray.filter(item => item[0].startsWith('RSS_'))
    envArray.forEach(item => tempArr.push(item[0] + '=' + item[1]))
    const result = tempArr.join('; ')
    console.log(result)
};

parseEnv()
>>>>>>> 4369e71 (feat: done cli/env.js)

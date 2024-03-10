import {stat} from 'node:fs/promises'

const fileExisits = async (path) => {
    await stat(path)
    return true
}

// ----------------------------------
const exists = await fileExisits('./LESSONS_2/examples/data.txt')
console.log(exists)

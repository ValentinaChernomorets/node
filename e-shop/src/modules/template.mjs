import { readFile } from 'node:fs/promises'

const loadTemplate = async (name) => {
    return readFile(`pages/${name}`)
}
export {loadTemplate}
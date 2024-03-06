import {stat} from 'node:fs/promises'

const fileExisits = (path) => {
   return stat(path)
    .then( stats => {
        return true
    })
}

// ----------------------------------
fileExisits('./LESSONS_2/examples/data.txt')
    .then(exists => console.console.log(exists))

import {stat} from 'node:fs'

const fileExisits = (path, cb) => {
    stat(path, (err, stats) => {
        if (err) {
            console.log(err)
        } else if (stats) {
            cb(stats)
        }
    })
} 

// ----------------------------------
fileExisits(
    './LESSONS_2/examples/data.txt',
    stats => {
        console.log("file exists!")
    }
)
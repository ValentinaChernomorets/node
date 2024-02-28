import readline from 'readline'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const renderCatalog = (products, confirmCb) => {
    console.clear()
    decorateData("CATALOG")
    products.forEach((product, idx) => {
        // HW1: align columns
        let prodName = product.name.padEnd(20,' ')
        let number = String(idx+1).padStart(2, ' ')
        console.log(number, prodName, product.price)
    });
    io.question("choose > ", answer => {
        let n = parseInt(answer)
        // HW3: check if you've got a number !
        if (!isNaN(n)) {
            if (1 <= n && n <= products.length) {
                let product = products[n-1]
                io.question(`how many "${product.nsme}" : ? `, answer => {
                    let q = parseInt(answer)
                    // HW3: check if you've got a number !
                    if (!isNaN(q)) {
                        let cost = q * product.price
                        io.question(`product cost = "${cost}" : confirm(y/n) `, answer => {
                            switch(answer) {
                                case 'y':
                                    confirmCb(n, product, q)
                                break;
                                case 'n': console.log(`product "${product.name}" was not confirmed!`); break;
                                default: console.log('invalid option'); break;
                            }
                            io.close();
                        })
                    } else {
                        console.log("Entered value is not a number, please enter the number!")
                        io.close();
                    }
                })
            }
        }
        else {
            console.log("Entered value is not a number, please enter the number!")
            io.close();
        }
        console.log("answer:", answer)
    })
}

export default {renderCatalog}

const decorateData = (head) => {
    console.log("===================================")
    console.log(`${head}`)
    console.log("===================================")
}

// HW2: make a helper function
// namedit("CATALOG")
// render the
    // console.log("===================================")
    // console.log("CATALOG")
    // console.log("===================================")
// USE THE FUNCTION inside renderCatalog()
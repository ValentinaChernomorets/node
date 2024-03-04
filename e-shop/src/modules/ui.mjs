import readline from 'readline'
import {products, cart} from './data.mjs'

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const decorateData = (head) => {
    console.log("===================================")
    console.log(`${head}`)
    console.log("===================================")
}

const renderMainMenu = () => {
    console.clear()
    decorateData("MAIN MENU")
    console.log("1. Catalog")
    console.log("2. Cart")
    console.log("0. Exit")
    io.question("choose > ", answer => {
        let option = parseInt(answer)
        switch(option) {
            case 1:
                renderCatalog(products, (n, product, q) => {
                    cart.items.push({ n, product, q })
                    renderMainMenu()
                })
                break;
            case 2:
                renderCart(cart)
                break;
            case 0:
                io.close() 
                break;
        }
    });
}

const renderCart = (cart) => {
    console.clear()
    decorateData("Cart")
    cart.items.forEach((item, idx) => {
        console.log(idx + 1, item.product.name, item.q);
    });
    console.log("==================================")
    console.log("1. Remove item")
    console.log("2. Change quantity")
    console.log("3. Checkout")
    console.log("0. Exit to Main menu")

    io.question("choose > ", answer => {
        let option = parseInt(answer)
        switch(option) {
            case 1:
                removeItem(cart)
                break;
            case 2:
                changeQuantity(cart)
                break;
            case 3:
                break;
            case 0:
                renderCatalog(products, (n, product, q) => {
                    cart.items.push({n, product, q})
                    renderMainMenu()
                });
                break;
        }
    });
}

const renderCatalog = (products, confirmCb) => {
    console.clear()
    decorateData("CATALOG")
    products.forEach((product, idx) => {
        let prodName = product.name.padEnd(20,' ')
        let number = String(idx+1).padStart(2, ' ')
        console.log(number, prodName, product.price)
    });
    console.log("==================================")
    console.log("0. Exit to Main menu")

    io.question("choose > ", answer => {
        let n = parseInt(answer)
        if (!isNaN(n)) {
            if (1 <= n && n <= products.length) {
                let product = products[n-1]
                io.question(`How many "${product.name}" ? `, answer => {
                    let q = parseInt(answer)
                    if (!isNaN(parseInt(q))) {
                        let cost = q * product.price
                        io.question(`product cost = "${cost}:" confirm(y/n) `, answer => {
                            switch(answer) {
                                case 'y':
                                    confirmCb(n, product, q)
                                break;
                                case 'n': console.log(`product "${product.name}" was not confirmed!`); break;
                                default: console.log('invalid option'); break;
                            }
                        })
                    } else {
                        console.log("Entered value is not a number, please enter the number!")
                        io.close();
                    }
                })
            } else if (n === 0 ) {
                renderMainMenu()
            }
        }
        else {
            console.log("Entered value is not a number, please enter the number!")
            io.close();
        }
    })
}

// HW1: finish `Remove item` and `Change quantity` in CART MENU
const removeItem = (cart) => {
    console.clear()
    decorateData('List of Products')
    cart.items.forEach((item, idx) => {
        console.log(idx + 1, item.product.name, item.q);
    });
    io.question(`Please enter which one "Product", do you want to remove?`, answer => {
        cart.items.forEach((product, idx) => {
            if (answer == idx+1) {
                cart.items.splice(idx, 1)
                console.clear()
                renderCart(cart)
            }
        });
    })
}

const changeQuantity = (cart) => {
    console.clear()
    decorateData('List of Products')
    cart.items.forEach((item, idx) => {
        console.log(idx + 1, item.product.name, item.q);
    });
    io.question(`Please enter which one "Product", do you want to change quantity?`, answer => {
        cart.items.forEach((product, idx) => {
            if (answer == idx+1) {
                io.question(`How many? `, answerTwo => {
                    product.q = answerTwo
                    console.clear()
                    renderCart(cart)
                })
            }
        });
    })
}

export {renderCatalog, renderMainMenu, renderCart, removeItem, changeQuantity}

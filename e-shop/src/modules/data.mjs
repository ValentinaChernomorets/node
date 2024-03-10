import {readFile, writeFile} from 'node:fs/promises'

const getProducts_ = (cb) => {
    fs.readFile("./storage/products.json", (err, data)=> {
        if (err !== null) {
            console.log("Error: can't read products!")
        } else if (data) {
            let products = JSON.parse(data.toString())
            cb(products)
        }
    })
}

const getProducts = async () => {
    let data = await readFile("./storage/products.json")
    let products = JSON.parse(data.toString())
    return products
}

const saveCart = async (cart) => {
    await writeFile("./storage/cart.json", JSON.stringify(cart, null, 2));
    return true;
}

// HW1: make a function called - getCart which using promisse will load the cart at the begining
const getCart = async () => {
    let data = await readFile("./storage/cart.json")
    let cart = JSON.parse(data.toString())
    return cart
}

export { getProducts, saveCart, getCart }
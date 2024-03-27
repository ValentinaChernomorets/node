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

const getProductById = async id => (await getProducts()).find(product => product.id === id);

const saveCart = async (cart) => {
    await writeFile("./storage/cart.json", JSON.stringify(cart, null, 2));
    return true;
}

const getCart = async () => {
    let data = await readFile("./storage/cart.json")
    let cart = JSON.parse(data.toString())
    return cart
}

export { getProducts, saveCart, getCart, getProductById}
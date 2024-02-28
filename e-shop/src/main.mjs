// main module
import ui from './modules/ui.mjs'
import data from './modules/data.mjs'

ui.renderCatalog(data.products, (n, product, q) => {
    data.cart.items.push({
        index: n,
        product: product,
        quantity: q
    });
    // HW4: 
    // each time the user confirm
    // add a { n, product, q } ---> cart.items
})

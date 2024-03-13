import http from 'node:http'
import { loadTemplate } from './modules/template.mjs'
import { getProducts } from './modules/data.mjs'

const server = http.createServer(async (req, res)=> {
    //HW1: rewrite using switch
    let html
    switch(req.url) {
        case '/':
            html = await loadTemplate('home.html')
            // HW2: replace the {% CATALOG %} -> html product with products info
            let productInfo = await getProducts()
            let product = ''
            productInfo.forEach(element => {
                product += `<div class="info-product">
                                <p> ${element.name}: price - ${element.price} </p>
                            </div>`;
            });
            html = html.toString().replace("{% CATALOG %}", product);
            break;
        case '/cart':
            html = `<h2>Cart details</h2>`
            break;
        case '/pay':
            html = `<h2>Payment</h2>`
            break;
        default:
            html = `Ooops, not found!`
            res.statusCode = 404
            break;
    }
    res.setHeader("Content-type", "text/html")
    res.end(html)
})

server.listen("3000", "localhost")

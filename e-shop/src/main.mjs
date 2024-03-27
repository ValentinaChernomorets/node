import http from 'node:http'

import { getProducts, getProductById } from './modules/data.mjs'
import { render } from './modules/template.mjs'
import { readFile } from 'node:fs/promises'

const server = http.createServer(async (req, res)=> {
    res.setHeader("Content-type", "text/html")
    let html
    if(req.url === "/") {
        const products = await getProducts()
        html = await render('./pages/home.html', { products: products })
    } else if (req.url.startsWith("/images")) {
        html = await readFile(`.${req.url}`)
    } else if (req.url.startsWith("/buy")) { // "/buy/1"
        // HW3: Check in server side checked term or not
        let term = RegExp('[?&]term=([^&]+)')
        let matchTerm = req.url.match(term)
        if ( matchTerm ) {
            console.log("The term is checked")
        }
        
        // HW1: try to use regexp capture
        let regex = RegExp('^/buy/(\\d+)$')
        let match = req.url.match(regex);
        let matchId = match == null ? 'Empty' : match[1]
        console.log(`Find ID with regex v1: ${matchId}`)

        // HW2: what if "/buy?id=1"
        let urlTest = '/buy?id=1'
        let regexT = RegExp('/buy\\?id=(\\d+)')
        let matchT = urlTest.match(regexT);
        let matchIdT =  matchT == null ? 'Empty' : matchT[1]
        console.log(`Find ID with regex v2: ${matchIdT}`)

        let id = parseInt(req.url.split("/").pop())
        let product = await getProductById(id)
        html = await render('./pages/order.html', { product: product })
    } else {
        html = `Ooops, not found!`
        res.statusCode = 404
    }
    res.end(html)
})

server.listen("3000", "localhost")

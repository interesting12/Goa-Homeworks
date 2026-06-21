const express = require('express')

const productsRoutes = require('./routes/products.routes')
const cartRoutes = require('./routes/cart.routes')
const ordersRoutes = require('./routes/orders.routes')

const app = express()

app.use(express.json())

app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)
app.use('/orders', ordersRoutes)

module.exports = app

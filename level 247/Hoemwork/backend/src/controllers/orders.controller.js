const orders = require('../data/orders')
const cart = require('../data/cart')

exports.createOrder = (req, res) => {
  if (cart.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' })
  }

  const order = {
    id: Date.now(),
    items: [...cart],
    date: new Date()
  }

  orders.push(order)
  cart.length = 0

  res.json({ success: true, data: order })
}

exports.getOrders = (req, res) => {
  res.json({ success: true, data: orders })
}

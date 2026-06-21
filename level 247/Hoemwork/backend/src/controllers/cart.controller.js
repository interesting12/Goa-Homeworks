const cart = require('../data/cart')
const products = require('../data/products')

exports.getCart = (req, res) => {
  res.json({ success: true, data: cart })
}

exports.addToCart = (req, res) => {
  const { productId } = req.body
  const product = products.find(p => p.id === productId)

  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' })
  }

  cart.push(product)
  res.json({ success: true, data: cart })
}

exports.clearCart = (req, res) => {
  cart.length = 0
  res.json({ success: true, data: cart })
}

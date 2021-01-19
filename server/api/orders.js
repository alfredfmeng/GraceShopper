const router = require('express').Router()
const {default: axios} = require('axios')
const {Order} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll()
    res.json(orders)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    res.json(order)
  } catch (error) {
    next(error)
  }
})

// DUMMY DATA, REPLACE WITH REAL LOCALSTORAGE + LOGIN
const userID = 1

router.post('/', async (req, res, next) => {
  try {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const order = await Order.create({user: userID})
    for (let i = 0; i < cart.length; i++) {
      const book = await axios.get(`/books/${cart[i].id}`)
      order.addBook(book)
    }
  } catch (err) {
    console.error(err)
  }
})

const router = require('express').Router()
const {Books} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const books = await Books.findAll()
    res.json(books)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const book = await Books.findByPk(req.params.id)
    res.json(book)
  } catch (error) {
    next(error)
  }
})

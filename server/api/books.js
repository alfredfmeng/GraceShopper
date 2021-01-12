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

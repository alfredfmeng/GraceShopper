const router = require('express').Router()
const {Book} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.isAdmin) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

const isUserMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser === req.params.id) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    res.json(book)
  } catch (error) {
    next(error)
  }
})

router.post('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.json(book)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    res.send(await book.update(req.body))
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    await book.destroy()
  } catch (error) {
    next(error)
  }
})

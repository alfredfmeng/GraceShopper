const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAdminMiddleware = (req, res, next) => {
  const currentUser = req.user
  if (currentUser && currentUser.admin) {
    next()
  } else {
    const error = new Error('Nope')
    error.status = 401
    next(error)
  }
}

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'admin', 'cart']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.json(user)
  } catch (err) {
    next(err)
  }
})

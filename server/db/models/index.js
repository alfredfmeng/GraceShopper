const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const Book = require('./books')
const Order = require('./order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

User.hasMany(Order, {
  foreignKey: 'userId'
})
Order.belongsTo(User)

const bookOrders = db.define('book_order', {
  bookId: {
    type: Sequelize.INTEGER,
    references: {
      model: Book,
      key: 'id'
    }
  },
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  }
})

Book.belongsToMany(Order, {through: bookOrders})
Order.belongsToMany(Book, {through: bookOrders})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Book,
  Order,
  bookOrders
}

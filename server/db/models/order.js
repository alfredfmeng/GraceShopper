const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Order

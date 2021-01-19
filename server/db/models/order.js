const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.JSON),
    allowNull: false
  }
})

module.exports = Order

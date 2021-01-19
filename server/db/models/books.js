const Sequelize = require('sequelize')
const db = require('../db')

const Books = db.define('book', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://kbimages1-a.akamaihd.net/Images/0/353/569/90/False/empty_book_cover.jpg'
  }
})

module.exports = Books

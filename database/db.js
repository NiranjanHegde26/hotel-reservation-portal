  
const Sequelize = require('sequelize')
const db = {}
db_name = '' //Enter your DB Name
db_user = '' //Enter your DB User Name
db_pwd = '' //Enter your DB Password
const sequelize = new Sequelize(db_name, db_user, db_pwd, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db



sequelize.sync({force: false});

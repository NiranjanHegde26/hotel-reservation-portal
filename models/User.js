const Sequelize = require('sequelize')
const db = require('../database/db.js')
const SingleRoom=require('./Single Room')
const DeluxeRoom=require('./Deluxe Room')
const SinglePayment=require('./Single Payment')
const DeluxePayment=require('./Deluxe Payment')



const User = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
 

 
 
  {
    timestamps: false
  }

)

User.hasMany(SingleRoom, { foreignKey: 'u_id' })
SingleRoom.belongsTo(User,{foreignKey:'u_id'})


User.hasMany(DeluxeRoom, { foreignKey: 'u_id' })
DeluxeRoom.belongsTo(User,{foreignKey:'u_id'})


User.hasMany(SinglePayment, { foreignKey: 'u_id' })
SinglePayment.belongsTo(User,{foreignKey:'u_id'})


User.hasMany(DeluxePayment, { foreignKey: 'u_id' })
DeluxePayment.belongsTo(User,{foreignKey:'u_id'})




module.exports=User;
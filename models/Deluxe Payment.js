const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'deluxe_payment',
  {
   t_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    u_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   drb_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
   card_no: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    total:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    transcation_time: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
 

 
 
  {
    timestamps: false
  }

)
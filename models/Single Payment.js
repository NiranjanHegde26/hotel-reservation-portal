const Sequelize = require('sequelize')
const db = require('../database/db.js')


const SinglePayment= db.sequelize.define(
  'single_payment',
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
   srb_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
   card_no: {
        type: Sequelize.STRING,
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




module.exports=SinglePayment;
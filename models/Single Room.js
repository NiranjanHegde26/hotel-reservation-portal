const Sequelize = require('sequelize')
const db = require('../database/db.js')
const SinglePayment=require('./Single Payment')
const User=require('./User')


const SingleRoom = db.sequelize.define(
  'single_room_booking',
  {
    srb_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    u_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   srh_name: {
      type: Sequelize.STRING,
      allowNull: false
  },
    no_of_rooms: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    check_in: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    check_out: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    total_days: {
        type: Sequelize.INTEGER,
      defaultValue:1
    },
    total:{
        type:Sequelize.FLOAT,
        allowNull: false
    },
    booked: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
 

 
 
  {
    timestamps: false
  }

)

SingleRoom.hasOne(SinglePayment,{foreignKey:'srb_id'})
SinglePayment.belongsTo(SingleRoom,{foreignKey:'srb_id'})



module.exports=SingleRoom;
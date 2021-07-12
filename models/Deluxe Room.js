const Sequelize = require('sequelize')
const db = require('../database/db.js')
const DeluxePayment=require('./Deluxe Payment')
const User=require('./User')
//const DeluxeRoomHotel=require('./Deluxe Room Hotel')

const DeluxeRoom = db.sequelize.define(
  'deluxe_room_booking',
  {
    drb_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    u_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
   drh_name: {
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

DeluxeRoom.hasMany(DeluxePayment,{foreignKey:'drb_id'})
DeluxePayment.belongsTo(DeluxeRoom,{foreignKey:'drb_id'})



module.exports=DeluxeRoom;
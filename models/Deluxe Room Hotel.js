const Sequelize = require('sequelize')
const db = require('../database/db.js')
const DeluxeRoom=require('./Deluxe Room')

const DeluxeRoomHotel=db.sequelize.define(
    'deluxe_room_hotel',{
        drh_id: {
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true
        },
        drh_name:{
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
        }
    },
    {
        timestamps: false
    }
)

DeluxeRoomHotel.hasMany(DeluxeRoom,{foreignKey:'drh_name'});
DeluxeRoom.belongsTo(DeluxeRoomHotel,{foreignKey:'drh_name'})

module.exports=DeluxeRoomHotel
const Sequelize = require('sequelize')
const db = require('../database/db.js')
const SingleRoom=require('./Single Room')

const SingleRoomHotel=db.sequelize.define(
    'single_room_hotel',{
        srh_id: {
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true
        },
        srh_name:{
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull:false
        }
       
    },
    {
        timestamps: false
    }
)

SingleRoomHotel.hasMany(SingleRoom,{foreignKey:'srh_name'});
SingleRoom.belongsTo(SingleRoomHotel,{foreignKey:'srh_name'})

module.exports=SingleRoomHotel
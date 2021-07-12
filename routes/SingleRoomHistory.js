
const express = require('express')
const users = express.Router()
const cors = require('cors')

const User = require('../models/User')
const SingleRoom=require('../models/Single Room')
const SinglePayment=require('../models/Single Payment')
const SingleRoomHotel=require('../models/Single Room Hotel')


users.use(cors())
//console.log('a')
users.post('/single-history', (req,res)=>{
  
    User.findAll({
      where:{
        id:req.body.id
      },
      attributes:['id'],
      include:[{
        model:SinglePayment,
        attributes:['t_id','total'],
        include:[{
          model:SingleRoom,
          attributes:['booked','srh_name','no_of_rooms']
        }]
      }]
     
    
     
     
    })
     .then(user => {
       //console.log("In")
        if (user) {console.log(user)
          res.json(user)
          
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {console.log("Err")
        res.send('error: ' + err)
      })
   
})
//console.log("err")

module.exports=users

/* include:[{
        model:SinglePayment,
       // {SinglePayment.findAll({u_id:req.body.id})},
        attributes:['total','t_id'],
        required:true,
        include:[{
          model:SingleRoom,
          required:true,
          attributes:['booked','no_of_rooms'],
          include:[{
            model:SingleRoomHotel,
            attributes:['srh_name'],
            required:true
          }]
        }]*/
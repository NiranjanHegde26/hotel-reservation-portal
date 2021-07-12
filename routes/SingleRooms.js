const express = require('express')
const singleRoom = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'

const Single = require('../models/Single Room')
singleRoom.use(cors())

singleRoom.post('/book',( req, res)=>{
   const today=new Date()
   const userData ={
        
    u_id:req.body.u_id,
    srh_name:req.body.srh_name,
    no_of_rooms: req.body.no_of_rooms,
    check_in:req.body.check_in,
    check_out:req.body.check_out,
    total_days:req.body.total_days,
    total:req.body.total,
    booked:today
}
 console.log("here") 
Single.findOne({
  where: {
 booked:today
  }
})
  //TODO bcrypt
  .then(user => {
    if (!user) {console.log("Creating..")
      Single.create(userData)
        .then(user => {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          console.log(token);
          res.json({ token: token })
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    } else {
      res.json({ error: 'User already exists' })
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})


singleRoom.get('/single-payment', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Single.findOne({
    where: {
      u_id: decoded.u_id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports=singleRoom


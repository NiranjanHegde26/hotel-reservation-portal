const express = require('express')
const deluxePay = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'




const Deluxe = require('../models/Deluxe Payment')
deluxePay.use(cors())

deluxePay.post('/deluxe-transcation',( req, res)=>{
   const today=new Date()
   const userData ={
   drb_id: req.body.drb_id,
   u_id: req.body.u_id,
   total: req.body.total,
   card_no: req.body.card_no,
   transcation_time: today
}
  
Deluxe.findOne({
  where: {
 u_id: req.body.u_id
  }
})
  //TODO bcrypt
  .then(user => {
    if (!user) {
      Deluxe.create(userData)
        .then(user => {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          //console.log(token);
          res.json({ token: token })
        })
        .catch(err => {
          res.send('error: ' + err)
        })
    } else {
      res.json({ error: 'Payment data already exists' })
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})






module.exports=deluxePay


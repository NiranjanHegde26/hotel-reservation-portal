const express = require('express')
const singlePay = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'

const Single = require('../models/Single Payment')
singlePay.use(cors())

singlePay.post('/single-transcation',( req, res)=>{
   const today=new Date()
   const userData ={
   srb_id: req.body.srb_id,
   u_id: req.body.u_id,
   total: req.body.total,
   card_no: req.body.card_no,
   transcation_time: today
}
  
Single.findOne({
  where: {
    transcation_time:today
  }
})
  //TODO bcrypt
  .then(user => {
    if (!user) {
      Single.create(userData)
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






module.exports=singlePay


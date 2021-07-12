
const express = require('express')
const users = express.Router()
const cors = require('cors')

const User = require('../models/User')
users.use(cors())

users.post('/editname',(req,res)=>{
    //console.log(req.body.rename+"...."+req.body.id)
    User.update({
        first_name:req.body.rename,},{
        where:{
            id:req.body.id
        }
}).then(user=>{
    console.log("worked")
    res.json(user)
})
})

users.post('/delete-user',(req,res)=>{

    User.destroy({where:{id:req.body.id}})
})

module.exports=users

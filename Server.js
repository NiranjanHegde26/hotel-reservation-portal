var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var User= require('./routes/Users')
var SingleRoom=require('./routes/SingleRooms')
var DeluxeRoom=require('./routes/DeluxeRooms')
var PaymentSingle=require('./routes/SinglePayments')
var PaymentDeluxe=require('./routes/DeluxePayments')
var UserHistory=require('./routes/SingleRoomHistory')
var SingleRoomHistory=require('./routes/SingleRoomHistory')
var DeluxeRoomHistory=require('./routes/DeluxeRoomHistory')
var EditUser=require('./routes/Edit')


app.use('/users', User)
app.use('/SingleRooms',SingleRoom)
app.use('/DeluxeRooms', DeluxeRoom)
app.use('/Single-Rooms',PaymentSingle)
app.use('/Deluxe-Rooms', PaymentDeluxe)
app.use('/Single-history',SingleRoomHistory)
app.use('/History', DeluxeRoomHistory)
app.use('/Edit', EditUser)


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})



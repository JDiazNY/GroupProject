const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/ItemListDB")
.then(() =>{
    console.log("Successfully Connected to DB")
})
.catch(() =>{
    console.log("Connection Error")
})
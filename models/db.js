const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/StudentList',{useNewUrlParser:true},(err)=>{
    if(!err)
    console.log("Connected")
    else
    console.log("Problem in Connection")
})
require('./student.model')
mongoose.connect('mongodb://localhost:27017/StudentAttendence',{useNewUrlParser:true},(err)=>{
    if(!err)
    console.log("Connected")
    else
    console.log("Problem in Connection")
})
require('./student.model')
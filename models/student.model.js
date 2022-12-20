const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    reg:String,
    date:String,
    cname:String,
    school:String,
    sub:String,
    sem:String,
    contact:Number,
    email:String,
    password:String
    

    
})
module.exports=mongoose.model('StudentList',studentSchema)


const attendenceSchema=new mongoose.Schema({
    reg:String,
    sub:String,
    contact:Number,
    foo:String
    

    
})
module.exports=mongoose.model('StudentAttendence',attendenceSchema)
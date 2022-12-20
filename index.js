require('./models/db')
const express=require('express')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const user=mongoose.model('StudentList')
const atten=mongoose.model('StudentAttendence')
 const app=express()
 app.use(express.static('public'));
 app.use(bodyparser.urlencoded({extended:false}))
 app.set('view engine', 'ejs')
app.get("/",(req,res)=>{
        user.find((err,data)=>{
        
            res.render('index',{data:data})
        })
        
    })
    app.post("/save",(req,res)=>{
        var data=new user(req.body)
        data.save((err,data)=>{
            if(!err)
            {
                console.log('Data Saved...')
                res.redirect("/login")
                
            }
            else{
                console.log("Problem in data saved!!!")
                console.log(err)
               
            }
        })
        
        
    })
    app.post("/att",(req,res)=>{
        var data=new atten (req.body)
        data.save((err,data)=>{
            if(!err)
            {
                console.log('Attendence Sucessfully Recorded...')
                res.redirect("/show")
                
            }
            else{
                console.log("Problem in Attendence!!!")
                console.log(err)
               
            }
        })
        
        
    })
    app.get("/student",(req,res)=>{
        user.find((err,data)=>{
            res.render('student',{data:data})
        })
        
    })
    app.get("/attendence",(req,res)=>{
        user.find((err,data)=>{
            res.render('attendence',{data:data})
        })
        
    })
    app.get("/show",(req,res)=>{
        atten.find((err,data)=>{
            res.render('show',{data:data})
        })
        
    })
        app.get("/register",(req,res)=>{
            res.render('register')
        })
        app.get("/student",(req,res)=>{
            res.render('student')
        })
        app.get("/time",(req,res)=>{
            res.render('time')
        })
        app.get("/fees",(req,res)=>{
            user.find((err,data)=>{
                res.render('fees',{data:data})
            })
        })
        
        
       
       


app.get("/admin",(req,res)=>{
    res.render('admin')
    
})
app.get("/login",(req,res)=>{
    res.render('login')
})
app.get("/alogin",(req,res)=>{
    res.render('alogin')
})



app.post("/login",(req,res)=>{
    var email=req.body.email
    var password=req.body.password

    user.find({$and:[{email:email},{password:password}]},(err,data)=>{
        if(!err)
        {
            console.log("match")
            if(data.length!=0)
            res.render('index')
            else{
                res.render('login')
            }
            
        }
        
        else{
            console.log("problem")
            res.render('register')
        }
    
    })
})
app.post("/alogin",(req,res)=>{
    
    var email=req.body.email
    var password=req.body.password

    if(email=='admin' && password=='123')
        
        {
            console.log("match")
            res.render('admin')
           
            
        }
        
        else{
            console.log("problem")
            res.render('register')
        }
    
    
    })



    
    app.listen(3000,()=>{
        console.log("Server is Running")
    })
    
   
    
    
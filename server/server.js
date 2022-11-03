const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bus = require('./models/busModel')
const stud = require('./models/studentModel')
const { findOneAndUpdate, find } = require('./models/busModel')


const app = express()
app.use(cors())




app.use(express.json())

app.use(express.urlencoded({extended:true}))
const dbUrl = 'mongodb://localhost:27017/busFee'
const connectDB=async()=>{await mongoose.connect(dbUrl)}


app.post('/newStudent',async(req,res)=>{
    const data = new stud(req.body)
    data.save()
    console.log(data)
    res.json(data)
})


app.get('/allDetails',async(req,res)=>{
    const data = await stud.find()
    res.json(data)

})

app.get('/student/:id',async(req,res)=>{
    console.log(req.params.id)
    const data = await stud.findById(req.params.id)
    res.json(data)
})

app.post('/pay',async(req,res)=>{
    await bus.findOneAndUpdate({rollNo:req.body.rollNo},{$set:{"status":"yes"}})
    .then((data,err)=>{
        if(err)
        {
            console.log(err)
            res.send("Error")
        }   
        
    })
})

app.post('/bus/insert',async(req,res)=>{
    const bdetails = await new bus(req.body)
    bdetails.save()
    console.log(bdetails)  
})

app.get('/bus/catalog',async(req,res)=>{
    await bus.find()
    .then((data)=>{
        res.json(data)
    })
})

app.post('/status',async(req,res)=>{
    console.log("first")
    const data = await bus.find({rollNo:req.body.rollNo});
    
    res.json(data);
})

connectDB().then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB not connected")
})








app.listen(4000,()=>{
    console.log(`Serving on port 4000`)
})
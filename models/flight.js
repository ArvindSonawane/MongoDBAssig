const express= require("express");
const Flight = require("./models/flights");
require("./db/conn");
const app=express();
const Flights=require("./models/flights");
const port=process.env.PORT || 3023;

app.use(express.json());
//create a flight details

app.post("/flights",(req,res)=>{
    console.log(req.body);
    const user=new Flight(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    })
    
 })
 app.listen(port,()=>{
    console.log('connection is setup at ${port}')
 })
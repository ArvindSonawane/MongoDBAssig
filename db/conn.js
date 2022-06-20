const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://arvind:arvind@cluster0.kkrqe.mongodb.net/?retryWrites=true&w=majority",(err,client)=>{
    if(err)
    console.log("Could not connect to DataBase")
    else
 {
     console.log("Connection Successful")
 }
    
 })
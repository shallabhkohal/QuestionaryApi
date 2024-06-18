//9vIrLfk9AUyftmge
//mongodb+srv://shallabhrajput9:9vIrLfk9AUyftmge@cluster0.dbq6p6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shallabhrajput9:9vIrLfk9AUyftmge@cluster0.dbq6p6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{}).then(()=>{
    console.log("mongodb connected")
}).catch((err)=>{
    console.log(err)
})
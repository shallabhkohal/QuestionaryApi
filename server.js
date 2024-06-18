
const express = require("express");
const router = require("./routes/route");

const PORT = 3500;
require("./conn/conn")

const app = express();

app.use(express.static("questionaryapi"))

app.use(express.json());

app.use(router);

app.listen(PORT,()=>{
    console.log("listening to the port 3500")
})



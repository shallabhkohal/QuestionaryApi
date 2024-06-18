const express = require ("express");

const app = express();
const router = new express.Router();

app.use(express.json());

const qSchema = require("../schema/schema")

router.post("/add", async(req, res) => {
    try {
        // Your logic to process data and save to database
        const data =await new qSchema(req.body);
        data.save();
        res.send("Data inserted successfully!").status(201);
    } catch (err) {
        res.send("Internal server error").status(500);
    }
});

router.get("/fetch/:id",async  (req,res)=>{
    try{
        const data = await qSchema.findById(req.params.id);
        res.send(data);
    }catch(err){
        res.send("Internal server error").status(500);
    }
})

router.delete("/delete/:id",async (req,res)=>{
    try{
        const data = await qSchema.findByIdAndDelete(req.params.id);
        res.send(data)
    }catch(err){
        res.send("Internal server error").status(500);
    }
})

router.put("/update/:id",async (req,res)=>{
    try{
        const data = await qSchema.findByIdAndUpdate(req.params.id,req.body);
        res.send(data)
    }catch(err){
        res.send("Internal server error").status(500);
    }
})


module.exports = router
const mongoose = require("mongoose");

const quesSchema = new mongoose.Schema({

    name:String,
    questions:[
            {id:mongoose.Schema.Types.ObjectId, question : String, answer:String}

    ]
}
)    

const qSchema = new mongoose.model("qschema",quesSchema)

module.exports = qSchema
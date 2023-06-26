const { default: axios } = require("axios");
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors());

mongoose.connect("mongodb://localhost:27017/todos")
const schema = mongoose.Schema({
    title: String,
    status: String,
    time: String
})
const Model = mongoose.model("todos",schema)


app.get("/",async (req,res)=>{
    res.send(await Model.find({}))
})

app.post("/",(req,res)=>{
    const data = req.body
    Model.collection.insertOne(data)
    res.send("POST Request")
})

app.delete("/",async (req,res)=>{
    var data = req.body
    console.log(data)
    let a = await Model.collection.findOne(data)
    Model.collection.deleteOne(a)
    res.send(req.body)
})

app.patch("/",(req,res)=>{
    const id = req.body._id
    const status = req.body.status
    console.log(req.body)
    Model.findOne({_id: id}).then( async (doc)=>{
        doc.status = status
        await doc.save()
    })
    res.send("PATCH Request "+status)
})

app.listen(3010, () => {
  "Listening to Port 3010";
});

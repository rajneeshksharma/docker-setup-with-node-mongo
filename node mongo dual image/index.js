const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Db = "mongodb://mymongo:27017/test";
mongoose.connect(Db ,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
}).then(res => { console.log("DB connected") }).catch(err => {
    console.error(err);
})
app.get('/',(req, res)=>{
    res.json({msg : "Visiting Root dir"})
})
app.listen(8000 ,()=>{
    console.log("app start at 8000")
})
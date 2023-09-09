const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
app.use(express.json());
app.use(cors());

const signup = require("./routes/signup");
const signin = require ("./routes/login");

mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connected");
}).catch(()=>{
    console.log("Database connection error");
})


app.use(signup);
app.use(signin);   
             

app.listen(2000,() => {
    console.log("BE Started at port 2000");

});


const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.set('view engine','ejs'); // set view engine to ejs
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req, res)=>{
    res.render("main");
});

app.post("/",(req,res)=>{
    let name = req.body.name;
    console.log("name");
    res.render("final",{name:name});
});

app.listen(3000,()=>{
    console.log("Server stated on port 3000");
});
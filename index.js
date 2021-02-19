const express = require("express");

const app = express();


const body_parser =  require("body-parser");



app.use(body_parser.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(process.env.PORT,function(err){
  if(!err)
  {
    console.log("server is running at port 3000");
  }
  else{
    console.log("error");
  }
});


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
  var name = req.body.user_name;
  var passcode = req.body.password;
  console.log(name + " has logged in with password " + passcode);
  res.redirect("/");
});

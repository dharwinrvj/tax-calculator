const express=require('express');
var app=express();
//set port 
var port=process.env.PORT || 8080;
app.use(express.static(__dirname));
//routes
app.get('/',(req,res)=>{
    res.render('index');
});
app.listen(port,()=>{
    console.log("app running");
});
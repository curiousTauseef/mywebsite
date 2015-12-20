var express = require('express'); 
var app = express(); 

app.set('view engine', 'ejs');//setting the ejs engine
//app.set('views' + __dirname + '/views'); 

app.get('/', function(req,res){
    
    res.render('default', { title: "Marjuk"}); 
    
}); 

app.get('/update', function(req,res){
    
   // var id = req.params.id; 
    res.render("partials/pages/update"); 
    
}); 

app.get('/lotr', function(req,res){
    
   // var id = req.params.id; var title = req.params.title;  res.send("Marjuk" + id + title); 
   
   res.render("partials/content/lotr");
    
}); 


var server = app.listen(8080, function(){
    
    console.log("listening on port 8080"); 
    
}); 

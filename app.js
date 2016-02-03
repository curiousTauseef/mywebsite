var express = require('express'); 
var app = express(); 

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');//setting the ejs engine
//app.set('views' + __dirname + '/views'); 

app.get('/', function(req,res){
    
    res.render('default', { title: "Marjuk"}); 
    
}); 

app.get('/update', function(req,res){
    
   // var id = req.params.id; 
    res.render("partials/pages/update"); 
    
}); 

app.get('/blogs/writing', function(req,res){
    
   // var id = req.params.id; var title = req.params.title;  res.send("Marjuk" + id + title); 
       res.render("partials/blogs/writing"); 
   
}); 

app.get('/blogs/classics', function(req,res){
    
   // var id = req.params.id; var title = req.params.title;  res.send("Marjuk" + id + title); 
       res.render("partials/blogs/classics"); 
   
}); 

app.get('/blogs/comics', function(req,res){
    
   // var id = req.params.id; var title = req.params.title;  res.send("Marjuk" + id + title); 
       res.render("partials/blogs/comics"); 
   
}); 

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


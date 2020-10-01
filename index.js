const express = require('express');
const server= express();
const path=require('path');
server.get('/',function(req,res){
   // res.send('<h1>Servidor con la libreria recomendada EXPRESS</h1>');
   res.sendFile(path.join(__dirname,'index.html'));
   console.log(path.join(__dirname,'index.html'));
  //  res.end();
});
server.listen(3000,function(){
    console.log('Server funcionando en puerto 3000');
});
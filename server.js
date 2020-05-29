const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname+'/dist/medical'));

app.listen((process.env.PORT || 4200),(req,res)=>{
    console.log(`listening at port`);
});

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/medical/index.html'));
})

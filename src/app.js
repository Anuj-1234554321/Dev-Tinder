const express = require('express');
const app = express();

app.use('/',(req,res)=>{
    res.send("hello Dev")
});

app.listen(3000,(req,res)=>{
    console.log('server listing on 3000...')
})
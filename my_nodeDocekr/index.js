const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('<h1>Hitting on Root</h1>')
});
app.listen(8000 ,()=>{console.log(`APP start at 8000 port`)})
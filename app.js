const express = require('express');
const morgan = require('morgan');
const db = require('./mongodb')
const studentroute = require('./routes/studentroute');
const app = express();

app.use(morgan('dev'));
app.use('/api',studentroute)


app.listen(3005,()=>{
    console.log("listening to port 3005")
})
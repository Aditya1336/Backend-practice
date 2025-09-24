const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.get('/',(req,res)=>{
  res.send("Hello from the server.");
})

app.get('/twitter',(req,res)=>{
  res.send("Twitter cooking up!");
})

const port = 3000;
app.listen(process.env.PORT,()=>{
  console.log("The server has started.");
})
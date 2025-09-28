import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))

app.get('/',(req,res)=>{
  res.send("Hello from the server.");
})

app.get('/twitter',(req,res)=>{
  res.send("Twitter cooking up!");
})

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id:"1",
      content:"1st joke"
    },
    {
      id:"2",
      content:"2nd joke"
    },
    {
      id:"3",
      content:"3rd joke"
    },
    {
      id:"4",
      content:"4th joke"
    },
    {
      id:"5",
      content:"5th joke"
    },
  ];

  res.json(jokes);
})

const port = 3000;
app.listen(process.env.PORT,()=>{
  console.log("The server has started.");
})
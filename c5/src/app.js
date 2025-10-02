import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

import helmet from "helmet";

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'", "http://localhost:8000"], // 👈 allow API calls
      },
    },
  })
);

app.use(cors({
  origin: "http://localhost:8000", 
  credentials:true
}));

app.use(express.json({
  limit:"20kb"
}));

app.use(express.urlencoded({
  extended:true,
  limit:"20kb"
}));

app.use(express.static("public"));

app.use(cookieParser());

//Routes Import

import userRouter from '../routes/user.routes.js';

//Routes Declaration

app.use('/api/v1/users',userRouter);


export {app};
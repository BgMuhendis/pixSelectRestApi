const express = require('express');
const app = express();
const dotenv= require('dotenv').config();
require("./db/userDatabase.js");
const port =process.env.PORT || 3000;
const router = require('./router/userRouter');
const errorMiddleWare=require('./middleWare/errorMiddleWare');

app.use(express.json());
app.get("/", (req,res)=>{
    res.json({
        "message":"Hoşgeldiniz"
    });
});
app.use("/users", router);

app.use(errorMiddleWare);

app.listen(port, ()=>{
    console.log("BAĞLANILDI");
});
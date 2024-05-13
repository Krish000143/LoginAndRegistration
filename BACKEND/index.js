require('dotenv').config();
const express=require("express");
const app=express();
const connection=require("../BACKEND/db/connection");
const router=require("../BACKEND/routes/route");
const errorMiddelware = require('../BACKEND/errorMiddelware');
const cors=require('cors');
const bodyParser = require('body-parser')


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use("/api/v1",router);
app.use(errorMiddelware);






connection()
.then(()=>console.log("connected")
)
.then(()=>app.listen(3000,()=>console.log("listening")
))
.catch((e)=>console.log(e)
);
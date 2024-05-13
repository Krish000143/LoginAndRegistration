const express=require("express");
const route=express.Router();
const controller=require("../controller/controll");
const { jwtAuthMiddelware } = require("../jwt");


route.post("/signup",controller.postSignup);


route.post("/login",controller.postLogin);


route.get("/",controller.home);

module.exports=route;
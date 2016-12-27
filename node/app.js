/**
 * Created by dpk on 12/5/2016.
 */
var express=require('express');
var app=express();
app.use("/", express.static("/public"));

console.log("reached here");
app.listen(8080);
console.log("this is server checking ");




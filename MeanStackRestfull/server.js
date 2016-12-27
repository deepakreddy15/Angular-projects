/**
 * Created by dpk on 12/14/2016.
 */
var express=require("express");
var bodyparser=require("body-parser")
var app= express();

app.use(express.static("front"));
app.use(bodyparser.json);
app.get("/",function (req,res) {
    console.log("this is server starting point");
    res.sendFile(__dirname + "/new.html");
    console.log("this is server starting point");
    })
app.get("/contact",function (req,res) {

    console.log("getting data from server");
    var contactlist=[{
        name:"deepak",
        email:"depak@gmail.com",
        phone:"998-987-9876"
    },
        {
            name:"deepak",
            email:"depak@gmail.com",
            phone:"998-987-9876"
        },
        {
            name:"deepak",
            email:"depak@gmail.com",
            phone:"998-987-9876"
        }]
    res.json(contactlist);

});
app.post("/contact",function (req,res) {
    console.log("this is data from body: "+req.body);
})


app.listen(3100);
console.log("server is running");/**
 * Created by dpk on 12/14/2016.
 */


const express = require("express");
const mongoose = require("mongoose");
const user = require("./modal/user");

const router = require("./routes/router")
const controllers = require("./controllers/controls")



const app =express();

app.use(express.json());

const con = mongoose.connect("mongodb://localhost:27017", ()=>{
    console.log("Connected to Database");
})
app.use("/", router);

app.listen("5000",console.log("server started on port 5000"))

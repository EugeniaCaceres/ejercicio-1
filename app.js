
var router_tareas = require('./routes/rutas-tareas.js');


const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const uri = "mongodb+srv://eugenia:123456Me@cluster0.b9cld7a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

app.use(bodyParser.json());


const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});



app.use('/tareas', router_tareas);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express()
const cors = require("cors")
const juiceController = require("./controllers/juiceController")


// middleware something that happens between request and response

app.use(cors());
// Line below tells app to accept JSON
app.use(express.json());

app.use("/juice", juiceController)


app.get("/", (req, res) => {
    res.send("Welcome to our APP!")
});




module.exports = app
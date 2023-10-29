const express = require("express");
const app = require("../app");
const juiceArr = require("../models/juice")
// Setting up router for our juice
const juice = express.Router();


// get all of the juices
juice.get("/", (req, res, next) => {
    res.json(juiceArr)
})

/// get one of the juices
// :id means the path gets a variable as the paremeter

juice.get("/:id", (req, res, next) => {
    const id = req.params.id;
    res.json(juiceArr[id])
})
// Post a new juice to the juiceArr
juice.post("/", (req, res, next) => {
      juiceArr.push(req.body)
      res.json(juiceArr)
})

// PUT (update) a single juice with the infor from req.
juice.put("/:id", (req, res, next) => {
     const id = req.params.id
     juiceArr.splice(id, 1, req.body)
     res.json(juiceArr)
})

juice.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    // splice helps us to remove an element that is not at the end
    // or the beginning
    juiceArr.splice(id, 1)
    res.json(juiceArr)

})









module.exports = juice
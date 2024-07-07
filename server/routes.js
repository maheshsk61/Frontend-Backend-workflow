const express = require('express')
const router = express.Router()
const { dummyData } = require('./dummydata')
var postedData = []
router.get("/dummyData", (req, res) => {
    res.send(dummyData)
})
router.post("/employeeData", (req, res) => {
    postedData.push(req.body)
    console.log(req.body);
    res.send(req.body)
})
router.get("/employeeData", (req, res) => {
    if (postedData) {
        res.send(postedData)
    }
    else {
        res.send("No Data Posted Yet")
    }
})
module.exports = router
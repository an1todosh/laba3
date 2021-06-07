const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    culture,
    getCulture,
    deleteCulture,
    UpDateCulture,
} = require("../utils/utilsCulture");

router.post('/culture',async (req,res)=>{
    await culture(req,"culture", res);
})

router.get('/getCulture',async (req,res)=>{
    await getCulture(req,"culture", res);
})
router.delete('/deleteculture/:id', async function(req,res){
    await deleteCulture(req,"culture",res);
})
router.put('/UpDateculture/:id', async function(req,res){
    await UpDateCulture(req,"culture",res);
})
module.exports = router
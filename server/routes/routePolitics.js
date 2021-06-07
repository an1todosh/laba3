const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    polits,
    getPolits,
    deletePolits,
    UpDatePolits
} = require("../utils/utilsPolits");
router.post('/polits',async (req,res)=>{
    await polits(req,"polits", res);
})
router.get('/getPolits',async (req,res)=>{
    await getPolits(req,"polits", res);
})
router.delete('/deletepolits/:id', async function(req,res){
    await deletePolits(req,"polits",res);
})
router.put('/UpDatepolits/:id', async function(req,res){
    await UpDatePolits(req,"polits",res);
})
module.exports = router
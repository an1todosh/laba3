const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectID;
const jwt = require("jsonwebtoken")

const {
    economy,
    getEconomy,
    deleteEconomy,
    UpDateEconomy,
} = require("../utils/utilsEconomy");
router.post('/economy',async (req,res)=>{
    await economy(req,"economy", res);
})
router.get('/getEconomy',async (req,res)=>{
    await getEconomy(req,"economy", res);
})

router.delete('/deleteeconomy/:id', async function(req,res){
    await deleteEconomy(req,"economy",res);
})
router.put('/UpDateeconomy/:id', async function(req,res){
    await UpDateEconomy(req,"economy",res);
})

module.exports = router
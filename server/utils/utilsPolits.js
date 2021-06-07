const express = require('express')
const polits = async (request, role, response) => {
  const collection = request.app.locals.collection;
    const data = {
        _id:String(request.body._id),
        role:role,
        text:request.body.text,
        date:new Date().toLocaleString('uk-UA')
        
    }
    collection.insertOne(data,function (err,result){
      if(err){
        console.log(err);
        response.sendStatus(500);
      }
      response.sendStatus(200)
    });
};
const getPolits = async (req, role, res) => {
  const collection = req.app.locals.collection;
  collection.find({role:role},{ _id: 0 }).toArray()
  .then(polits => {
      res.send({
          polits
      })
  });
}
const deletePolits = async (req,role,res)=>{
  console.log(req.params.id)
  const id =req.params.id;
  const collection = req.app.locals.collection;
  collection.findOneAndDelete({_id: id}, function(err, result){         
      if(err) return console.log(err);    
      let user = result.value;
      res.send(user);
  });
}
const UpDatePolits = async (req,role,res) =>{
  if(!req.body) return res.sendStatus(400);
  const id = req.params.id;
  const text = req.body.text;
  const collection = req.app.locals.collection;
  collection.findOneAndUpdate({_id: id}, { $set: {text: text}},
       {returnOriginal: true },function(err, result){
      if(err) return console.log(err);     
      const user = result.value;
      console.log(result)
      res.sendStatus(200);
  });
}

module.exports = {
  polits,
  getPolits,
  deletePolits,
  UpDatePolits
};

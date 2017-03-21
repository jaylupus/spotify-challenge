var express = require('express');
var router = express.Router();
var Person = require('../person');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Person.find()
      .then(function(data){
        res.send(data);
      });
});

router.get('/1', function(req, res, next){
    Person.findOne({name: 'Sean'})
        .then(function(doc){
            res.send(doc);
        });
});

router.post('/', function(req, res, next){
  Person.create(req.body)
      .then(function(){
          res.sendStatus(201);
      });
});

router.put('/1', function (req, res, next) {
  Person.findOneAndUpdate({name: 'Sean'}, req.body)
      .then(function(){
          res.sendStatus(200);
      });
});

router.delete('/1', function(req, res, next){
  Person.remove({name: 'Sean'})
      .then(function(){
          res.sendStatus(200);
      });
});

module.exports = router;

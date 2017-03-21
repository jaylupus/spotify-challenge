var express = require('express');
var router = express.Router();
var Person = [];

/* GET users listing. */
router.get('/', function(req, res) {
    res.send(Person);
});

router.get('/1', function(req, res){
    res.send(Person[0]);
});

router.post('/', function(req, res){
    Person.push(req.body);
    res.sendStatus(201);
});

router.put('/1', function (req, res) {
    Person[0].favoriteCity = 'Brooklyn';
    res.sendStatus(201);
});

router.delete('/1', function(req, res){
    Person.slice();
    res.sendStatus(200);
});

module.exports = router;

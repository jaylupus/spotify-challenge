var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var personSchema = mongoose.Schema({
    id: Number,
    name: String,
    favoriteCity: String
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;

mongoose.connect('mongodb://localhost/spotify');
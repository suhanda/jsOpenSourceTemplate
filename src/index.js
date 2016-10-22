var randomName = require('./random-name.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: randomName,
    random: uniqueRandomArray(randomName)
}
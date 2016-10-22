var randomName = require('./random-name.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomName = uniqueRandomArray(randomName);

module.exports = {
    all: randomName,
    random: function (number) {
        if (number === undefined) {
            return getRandomName();
        }
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomName());
        }
        return randomItems;
    }
}
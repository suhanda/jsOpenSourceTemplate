import randomNames from "./random-name.json";
import uniqueRandomArray from "unique-random-array";


var getRandomName = uniqueRandomArray(randomNames);

module.exports = {
    all: randomNames,
    random: function (number) {
        if (number === undefined) {
            return getRandomName();
        }
        let randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomName());
        }
        return randomItems;
    }
}
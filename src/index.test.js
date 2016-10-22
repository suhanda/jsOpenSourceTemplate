var expect = require('chai').expect;
var randomNames = require('./index');


describe('random name', function () {
    describe('all', function () {
        it('should be an array of string', function () {

            function isAnArrayOfString(arr) {
                return arr.every(function (item) {
                    return typeof item == 'string';
                });
            }

            expect(randomNames.all).to.satisfy(isAnArrayOfString);
        });

        it('should contain `Suhanda`', function () {
            expect(randomNames.all).to.be.include('Suhanda');
        });


    });

    describe('random', function () {
        it('should include a random name from random-name.json', function () {
            var randomName = randomNames.random();

            expect(randomName).to.be.include(randomName);
        });
    });
});
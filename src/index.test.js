import {expect} from "chai";
import randomNames from './index';


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
            expect(randomNames.all).to.be.include(randomName);
        });

        it('should return an array of random items if passed a number', function () {
            var randomItems = randomNames.random(3);
            expect(randomItems).to.have.length(3);

            randomItems.forEach(function (item) {
                expect(randomNames.all).to.be.include(item);
            });
        })
    });
});
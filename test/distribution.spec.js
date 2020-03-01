const expect = require("chai").expect
const execute = require("../src/distribution").execute
const roomUtil = require('../src/room-util')

describe('Light Distribution Test Cases', () => {

    let testFile, resources = __dirname.concat("/resources/test-cases/");

    it('Test 1', () => {
        testFile = resources.concat('test1.txt')
        let room = execute(testFile)
        roomUtil.print(room)

        //expect(room.length).to.equal(2)
    });
});
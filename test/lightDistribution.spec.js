var expect = require("chai").expect
var execute = require("../src/light-distribution").execute
var path = require('path');

describe('Light Distribution Test', () => {

    let testFile, resources = __dirname.concat("/resources/");

    it('Invalid file name', () => {
        testFile = null
        expect(() => execute(testFile)).to.throw(Error, "Invalid file name")
    });

    it('File not found', () => {
        testFile = 'wrong-file-path.txt'
        expect(() => execute(testFile)).to.throw(Error, "File not found")
    });

    it('Empty File', () => {
        testFile = resources.concat('empty-file.txt')
        expect(() => execute(testFile)).to.throw(Error, "Empty file")
    });
});
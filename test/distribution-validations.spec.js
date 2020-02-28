const expect = require("chai").expect
const execute = require("../src/distribution").execute

describe('Light Distribution Validation Test', () => {

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

    it('Matrix must contain only values between 0 and 1', () => {
        testFile = resources.concat('invalid-charaters-file.txt')
        expect(() => execute(testFile)).to.throw(Error, "Matrix must contain only values between 0 and 1")
    });

    it('All rows of matrix must have the same length', () => {
        testFile = resources.concat('different-length-lines-file.txt')
        expect(() => execute(testFile)).to.throw(Error, "All rows of matrix must have the same length")
    });

    it('Valid matrix', () => {
        testFile = resources.concat('matrix.txt')
        expect(execute(testFile).length).to.equal(4)
    });
});
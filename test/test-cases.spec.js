const expect = require("chai").expect
const execute = require("../src/distribution").execute
const roomUtil = require('../src/room-util')

describe('', () => {
    let testFile, resources = __dirname.concat("/resources/test-cases/");
    
    it('Test 1', () => {
        testFile = resources.concat('test1.txt')
        let room = execute(testFile)
    });

    it('Test 2', () => {
        testFile = resources.concat('test2.txt')
        let room = execute(testFile)
    });

    it('Test 3', () => {
        testFile = resources.concat('test3.txt')
        let room = execute(testFile)
    });

    it('Test 4', () => {
        testFile = resources.concat('test4.txt')
        let room = execute(testFile)
    });

    it('Test 5', () => {
        testFile = resources.concat('test5.txt')
        let room = execute(testFile)
    });

    it('Test 6', () => {
        testFile = resources.concat('test6.txt')
        let room = execute(testFile)
    });

    it('Test 7', () => {
        testFile = resources.concat('test7.txt')
        let room = execute(testFile)
    });

    it('Test 8', () => {
        testFile = resources.concat('test8.txt')
        let room = execute(testFile)
    });

    it('Test 9', () => {
        testFile = resources.concat('test9.txt')
        let room = execute(testFile)
    });
});
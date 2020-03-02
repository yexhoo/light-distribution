const execute = require("../src/distribution").execute
describe('Show distribution', () => {
    let testFile, resources = __dirname.concat("/resources/");
    it('Show distribution', () => {
        testFile = resources.concat('load-room.txt')
        execute(testFile)
    });
});
const validator = require("./validator")
const extractor = require("./extractor")

exports.execute = (filePath) => {

    const room = [];
    
    validator.file(filePath)
    const matrix = extractor.get(filePath)
    validator.matrix(matrix)

    return room;
}
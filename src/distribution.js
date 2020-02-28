const validator = require("./validator")
const extractor = require("./extractor")
const helper = require("./room")

exports.execute = (filePath) => {

    let room = [], matrix;

    validator.file(filePath)
    matrix = extractor.get(filePath)

    validator.matrix(matrix)
    room = helper.build(matrix)

    return room;
}
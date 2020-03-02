const validator = require("./validator")
const extractor = require("./extractor")
const roomUtil = require("./room-util")
const processor = require("./processor")

exports.execute = (filePath) => {

    let room = [], matrix;

    validator.file(filePath)
    matrix = extractor.get(filePath)

    validator.matrix(matrix)
    room = roomUtil.build(matrix)

    room = processor.apply(room)

    return room;
}
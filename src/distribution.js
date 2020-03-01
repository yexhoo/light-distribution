const validator = require("./validator")
const extractor = require("./extractor")
const roomUtil = require("./room-util")
const rulesProcessor = require("./rules-processor")

exports.execute = (filePath) => {

    let room = [], matrix;

    validator.file(filePath)
    matrix = extractor.get(filePath)

    validator.matrix(matrix)
    room = roomUtil.build(matrix)

    room = rulesProcessor.apply(room)

    return room;
}
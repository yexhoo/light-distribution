const validator = require("./validator")
const wrapper = require("./fileWrapper")

exports.execute = (filePath) => {

    const room = [];
    
    validator.file(filePath)
    const matrix = wrapper.getMatrix(filePath)
    validator.matrix(matrix)

    return room;
}
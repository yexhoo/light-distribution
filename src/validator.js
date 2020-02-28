const fs = require("fs")

exports.file = (filePath) => {
    if(!filePath) {
        throw new Error("Invalid file name")
    }

    if(!fs.existsSync(filePath)) {
        throw new Error("File not found")
    }
}

exports.matrix = (matrix) => {
    if(!matrix.length) {
        throw new Error("Empty file")
    }
}
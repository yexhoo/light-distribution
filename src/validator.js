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

    matrix.forEach(line => {
        if(!(line.every((char) => char == '1' || char == '0'))) {
            throw new Error("Matrix must contain only values between 0 and 1")
        }
    });

    const width = matrix[0].length
    if( !(matrix.every(  (line) => line.length === width  ))  ) {
        throw new Error("All rows of matrix must have the same length")
    }
}
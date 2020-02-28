const fs = require('fs');

exports.getMatrix = (filePath) => {

    const arrayFile = fs.readFileSync(filePath)
        .toString()
        .split("\n");

    return arrayFile
        .map((line) => line.replace(/\s/g, "").split(""))
        .filter((line) => line.length)
}
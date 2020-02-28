const fs = require('fs');

exports.get = (filePath) => fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .map((line) => line.replace(/\s/g, "").split(""))
    .filter((line) => line.length)
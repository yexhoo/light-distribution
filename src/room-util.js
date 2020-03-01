const constants = require("./constants")
const color = require('./color')

exports.build =
    (matrix) => matrix
        .map((line, y) =>
            line.map((char, x) => constants.buildCell(char == '1', x, y)))

exports.print = (room) => {
    room.forEach(row => {
        console.log.apply(this, row.map((cell) => color.get(cell)))
    });
}

exports.getMax = (room) => {
    return {
        "x": room[0].length - 1,
        "y": room.length - 1
    }
}
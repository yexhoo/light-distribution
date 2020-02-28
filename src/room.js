const constants = require("./constants")
const color = require('./color')

exports.build = (matrix) =>
    matrix.map((line) => line.map((char) => constants.buildCell(char == '1')))

exports.print = (room) => {
    room.forEach(row => {
        console.log.apply(this, row.map((cell) => color.get(cell)))
    });
}
const cellUtil = require("../cell-util")
const constants = require("../constants")
const neighbors = require("../neighbors")

exports.search = () => {
    return (cell, room) => {

        let node
        if (cellUtil.isAvailable(cell)) {

            const list = neighbors.get(cell, room).filter(n => !n.isWall)
            if (list.length == constants.TWO_NEIGHBORS
                && cellUtil.arePerpendicular(list.filter(n => n.isWall !== 1))
                && list.every((e) => cellUtil.isAvailable(e))) {

                node = cellUtil.deepCopy(room[cell.y][cell.x])
            }
        }

        return node
    }
}
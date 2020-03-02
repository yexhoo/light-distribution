const cellUtil = require("../cell-util")
const constants = require("../constants")
const neighbors = require("../neighbors")

exports.search = () => {
    return (cell, room) => {

        let node
        if (cellUtil.isAvailable(cell)) {
            const list = neighbors.getVerticals(cell, room)

            if (list.length >= constants.TWO_NEIGHBORS
                && cellUtil.isVertical(cell, list[0])
                && list.every((e) => cellUtil.isAvailable(e))) {

                node = cellUtil.deepCopy(room[cell.y][cell.x])
            }
        }

        return node
    }
}
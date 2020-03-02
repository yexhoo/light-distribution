const cellUtil = require("../cell-util")
const constants = require("../constants")
const neighbors = require("../neighbors")

exports.search = () => {
    return (cell, room) => {

        let node
        if (cellUtil.isAvailable(cell)) {
            const neighborsList = neighbors.get(cell, room)

            if (neighborsList.length >= constants.THREE_OR_MORE_NEIGHBORS
                && cellUtil.minimumAvailable(neighborsList, constants.THREE_OR_MORE_NEIGHBORS)) {

                node = cellUtil.deepCopy(room[cell.y][cell.x])
            }
        }

        return node
    }
}
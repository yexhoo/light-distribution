const roomUtil = require("./room-util")
const util = require("./util")
const cellUtil = require("./cell-util")

exports.get = (cell, room) => {
    const neighbors = []

    Array.prototype.push.apply(neighbors, this.right(cell, room))
    Array.prototype.push.apply(neighbors, this.left(cell, room))
    Array.prototype.push.apply(neighbors, this.up(cell, room))
    Array.prototype.push.apply(neighbors, this.down(cell, room))

    return neighbors
}

exports.getVerticals = (cell, room) => {
    const neighbors = []

    Array.prototype.push.apply(neighbors, this.up(cell, room))
    Array.prototype.push.apply(neighbors, this.down(cell, room))

    return neighbors
}

exports.getHorizontals = (cell, room) => {
    const neighbors = []

    Array.prototype.push.apply(neighbors, this.right(cell, room))
    Array.prototype.push.apply(neighbors, this.left(cell, room))

    return neighbors
}



exports.down = (cell, room) => {
    const neighbors = []
    const max = roomUtil.getMax(room)
    const down = cell.y - 1

    if (util.inRange(down, 0, max.y)) {
        neighbors.push(cellUtil.deepCopy(room[down][cell.x]))
    }

    return neighbors
}

exports.up = (cell, room) => {
    const neighbors = []
    const max = roomUtil.getMax(room)
    const up = cell.y + 1

    if (util.inRange(up, 0, max.y)) {
        neighbors.push(cellUtil.deepCopy(room[up][cell.x]))
    }

    return neighbors
}

exports.left = (cell, room) => {
    const neighbors = []
    const max = roomUtil.getMax(room)
    const left = cell.x - 1

    if (util.inRange(left, 0, max.x)) {
        neighbors.push(cellUtil.deepCopy(room[cell.y][left]))
    }

    return neighbors
}

exports.right = (cell, room) => {
    const neighbors = []
    const max = roomUtil.getMax(room)
    const right = cell.x + 1

    if (util.inRange(right, 0, max.x)) {
        neighbors.push(cellUtil.deepCopy(room[cell.y][right]))
    }

    return neighbors
}
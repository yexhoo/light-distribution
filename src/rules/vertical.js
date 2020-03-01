const common = require("./common")
const roomUtil = require("../room-util")
const cellUtil = require("../cell-util")
const constants = require("../constants")
const neighbors = require("../neighbors")

exports.apply = (room) => {
    const max = roomUtil.getMax(room), nodes = []

    for (j = 0; j <= max.y; j++) {
        for (i = 0; i <= max.x; i++) {

            node = search(room[j][i], room)

            if (node) {
                nodes.push(node)
            }
        }
    }

    if (nodes.length) {
        update(nodes, room);
    }

    return room
}

const search = (cell, room) => {
    let node

    if (common.isAvailable(cell)) {
        const list = neighbors.getVerticals(cell, room)
        if (list.length == constants.ONE_NEIGHBOR
            && cellUtil.isVertical(cell, list[0])
            && list.every((e) => common.isAvailable(e))) {
            node = cellUtil.deepCopy(room[cell.y][cell.x])
        }
    }

    return node
}

const update = (nodes, room) => {
    nodes.forEach(node => {
        if (!cellUtil.hasVertical(node, room)) {
            room[node.y][node.x].hasLightSpot = true
        }
    });
}
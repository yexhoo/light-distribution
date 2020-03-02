const roomUtil = require("../room-util")
const cellUtil = require("../cell-util")

let strategy;

exports.setStrategy = (obj) => {
    strategy = obj
}

exports.apply = (room) => {
    const max = roomUtil.getMax(room), nodes = []

    for (j = 0; j <= max.y; j++) {
        for (i = 0; i <= max.x; i++) {
            node = strategy.call(this, room[j][i], room)
            if (node) {
                nodes.push(node)
            }
        }
    }
    if (nodes.length) { update(nodes, room); }

    return room
}

const update = (nodes, room) => {
    nodes.forEach(node => {
        if (!(cellUtil.hasHorizontal(node, room) || cellUtil.hasVertical(node, room))) {
            room[node.y][node.x].hasLightSpot = true
        }
    });
}
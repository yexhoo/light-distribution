const roomUtil = require("./room-util");

exports.deepCopy = (sourceObj) => JSON.parse(JSON.stringify(sourceObj))

exports.hasHorizontal = (node, room) => {

    for (i = (node.x - 1); i >= 0; i--) {
        const n = room[node.y][i]
        if (n.isWall) { return false }
        if (n.hasLightSpot) { return true }
    }

    for (i = (node.x + 1); i <= roomUtil.getMax(room).x; i++) {
        const n = room[node.y][i]
        if (n.isWall) { return false }
        if (n.hasLightSpot) { return true }
    }

    return false
}

exports.hasVertical = (node, room) => {

    for (j = (node.y - 1); j >= 0; j--) {
        const n = room[j][node.x]
        if (n.isWall) { return false }
        if (n.hasLightSpot) { return true }
    }

    for (j = (node.y + 1); j <= roomUtil.getMax(room).y; j++) {
        const n = room[j][node.x]
        if (n.isWall) { return false }
        if (n.hasLightSpot) { return true }
    }

    return false
}
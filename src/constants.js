const buildCell = (wall, x, y) => {
    return {
        "isWall": wall,
        "hasLightSpot": false,
        "hasLight": false,
        "x": x,
        "y": y
    }
}

const BLACK_SQUARE = '\u25A0'
const THREE_OR_MORE_NEIGHBORS = 3
const TWO_NEIGHBORS = 2
const ONE_NEIGHBOR = 1

module.exports = {
    buildCell: buildCell,
    BLACK_SQUARE: BLACK_SQUARE,
    THREE_OR_MORE_NEIGHBORS: THREE_OR_MORE_NEIGHBORS,
    TWO_NEIGHBORS: TWO_NEIGHBORS,
    ONE_NEIGHBOR: ONE_NEIGHBOR
}
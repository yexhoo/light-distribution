const buildCell = (wall, x, y) => {
    return {
        "isWall": wall,
        "hasLightSpot": false,
        "hasLight": false,
        "x": x,
        "y": y,
        "isRight": false,
        "isLeft": false,
        "isUp": false,
        "isDown": false
    }
}

const BLACK_SQUARE = '\u25A0'
const MULTIPLE_WAY_NEIGHBORS = 3

module.exports = {
    buildCell: buildCell,
    BLACK_SQUARE: BLACK_SQUARE,
    MULTIPLE_WAY_NEIGHBORS: MULTIPLE_WAY_NEIGHBORS
}
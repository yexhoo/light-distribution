const buildCell = (wall) => {
    return {
        "isWall": wall,
        "hasLightSpot": false,
        "hasLight": false
    }
}

const BLACK_SQUARE = '\u25A0'

module.exports = {
    buildCell: buildCell,
    BLACK_SQUARE: BLACK_SQUARE
}
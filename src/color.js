const chalk = require('chalk');
const constants = require('./constants')

exports.get = (cell) => {

    if (cell.isWall) {
        return chalk.blue(constants.BLACK_SQUARE)
    }

    if (cell.hasLightSpot) {
        return chalk.red(constants.BLACK_SQUARE)
    }

    if (cell.hasLight) {
        return chalk.green(constants.BLACK_SQUARE)
    }

    return chalk.white(constants.BLACK_SQUARE)
}
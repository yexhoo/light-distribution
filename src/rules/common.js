exports.isAvailable = (cell) => !(cell.isWall || cell.hasLightSpot || cell.hasLight)
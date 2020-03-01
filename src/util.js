exports.inRange = (value, min, max) => {
    return ((value - min) * (value - max) <= 0);
}
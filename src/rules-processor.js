const multiple = require("./rules/multiple")
const twoWay = require("./rules/two-way")
const horizontal = require("./rules/horizontal")
const vertical = require("./rules/vertical")

exports.apply = (room) => {
    room = multiple.apply(room)
    room = twoWay.apply(room)
    room = horizontal.apply(room)
    room = vertical.apply(room)

    return room
}
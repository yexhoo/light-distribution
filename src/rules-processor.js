const multiple = require("./rules/multiple")

exports.apply = (room) => {
    room = multiple.apply(room)

    return room
}
const multiple = require("./strategy/multiple")
const twoWay = require("./strategy/two-way")
const horizontal = require("./strategy/horizontal")
const vertical = require("./strategy/vertical")
const roomUtil = require("./room-util")
const context = require("./strategy/context")

exports.apply = (room) => {

    roomUtil.print(room, "Input")

    context.setStrategy(multiple.search())
    context.apply(room)

    context.setStrategy(twoWay.search())
    context.apply(room)

    context.setStrategy(horizontal.search())
    context.apply(room)

    context.setStrategy(vertical.search())
    context.apply(room)
    
    roomUtil.print(room, "Output")

    return room
}
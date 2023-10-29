input.onButtonPressed(Button.A, function () {
    basic.showString("Quim")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("mama")
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
})

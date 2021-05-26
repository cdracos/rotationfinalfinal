input.onGesture(Gesture.LogoUp, function () {
    Rotation2 += 1
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function () {
    Rotation2 = 0
})
let Rotation2 = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
basic.showString("start pairing")
basic.forever(function () {
    basic.showNumber(Rotation2)
    basic.pause(200)
})

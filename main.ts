let temperatura = 0
music.setVolume(105)
basic.forever(function () {
	
})
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(input.temperature())
    if (input.temperature() < 5) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (input.temperature() > 30) {
        basic.showIcon(IconNames.Square)
    }
})

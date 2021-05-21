input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . # .
        # . # . #
        `)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Target)
    }
    music.playMelody("C - E - - - - - ", 120)
    control.waitMicros(8)
    music.playMelody("E - C - - - - - ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        # . # . #
        # . # . #
        # . . . #
        . # # # .
        `)
    music.playMelody("C5 B A G F E D C ", 120)
    basic.clearScreen()
})
basic.forever(function () {
	
})

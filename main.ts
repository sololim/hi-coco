input.onGesture(Gesture.Shake, function () {
    basic.showString("hi coco")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 B A G F E D C ", 120)
})

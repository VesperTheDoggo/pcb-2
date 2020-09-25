controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_goose.x += -30
    if (mr_goose.x <= 20) {
        mr_goose.setPosition(20, 15)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_goose.x += 30
    if (mr_goose.x >= 140) {
        mr_goose.setPosition(140, 15)
    }
})
let chadInitalSpeed = 0
let chadSpeed = 0
let virginInitalSpeed2 = 0
let virginSpeed2 = 0
let normInitalSpeed = 0
let normSpeed = 0
let poopTimer = 0
let mr_goose: Sprite = null
let chadDeaths = 0
let virginDeaths = 0
let normieDeath = 0
scene.setBackgroundImage(img`
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777774444477777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777774444477777777777777777777777777777
    777777777777222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777774444477777777777777777777777777777
    777777777777222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777744444444444447777777777777777777777777
    777777777772222227777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777744444444444447777777777777777777777777
    777777222222222222227777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777744444444444447777777777777777777777777
    777777222222222222227777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777744444444444447777777777777777777777777
    777777222222222222227777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444477777777777777777777777
    777777222222222222227777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444477777777777777777777777
    777777222222222222222277777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444477777777777777777777777
    777722222222222222222277777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444477777777777777777777777
    777722222222222222222277777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444477777777777777777777777
    777722222222222222222277777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774444444444477777777777777777777777777
    777722222222222222222277777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774444444444477777777777777777777777777
    777722222222222222222777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd77777777ee444444477777777777777777777777777
    777777222222222222222777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb77777777eeeee777777777777777777777777777777
    777777222222222222222777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb77777777eeeee777777777777777777777777777777
    777777222222222222222777747777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb77777777eeeee777777777777777777777777777777
    7777777777eeeee777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd77777777eeeee777777777777777777777777777777
    7777777777eeeee777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd77727777eeeee777777777777777777777777777777
    7777777777eeeee777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd77777777eeeee777777777777777777777777777777
    7777777777eeeee777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd77777777eeeee777777777777277777777777777777
    7777777777eeeee777777777277777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd77777777eeeee777777747777777777777777777777
    7777777777eeeee777777277777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777277777777777777777777777777
    7777777777eeeee777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777277777777777777777777747777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777277774777777777777777777747777777777777
    777777777277777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777477777777777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777277777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777727777777777727777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777
    777777727777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777744444777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777744444777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777744444777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777744444444777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777744444444444777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777744444444444777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777744444444444777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777744444444444447777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777444444444444444447777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777222227777777777
    777777777777444444444444444447777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777222227777777777
    777777777777444444444444444447777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777777777222227777777777
    777777777777444444444444444447777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777722222222227777777777
    777777777777444444444444444447777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777722222222222227777777
    777777777777777777eeeee7777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777722222222222227777777
    777777777777777777eeeee7777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777722222222222227777777
    777777777777777777eeeee7777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777722222222222222222227777
    777777777777777777eeeee7777727777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777722222222222222222227777
    777777477777777777eeeee7777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777722222222222222222227777
    777777777777777777eeeee7777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777722222222222222222227777
    777777777777777777eeeee7777774777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777722222222222222222227777
    777777777777747777eeeee7777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777772222222222277777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777772222222222277777777
    777777772777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777772222222222277777777
    777777777777777277777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd777777777777777777777777777eeeee77777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd777777777777777777777777777eeeee77777777777
    777777777777777777777777727777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb777777777777777777777777777eeeee77777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb777777777777777777777777777eeeee77777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb777777777777777777777777777eeeee77777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd777777777777777774777772777eeeee77777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd777777777777777777777777777eeeee77777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777277777777777777777777277777
    777777772222277777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777772222277777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777772777777777727777777777777777777777
    777777772222277777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777774777777777777
    777772222222222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777772222222222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777772222222222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777772222222222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777222222222222227777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777222222222222222227777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777222222222222222227777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    222222222222222222227777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777
    222222222222222222227777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777774444477777777777777777777777
    222222222222222222227777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777777777777774444477777777777777777777777
    222222222222222222777777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777444444477777777777777777777777
    222222222222222222777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777744444444444477777777777777777777
    772222222222222222777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777744444444444477777777777777777777
    772222222222222222777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777744444444444477777777777777777777
    772222222222222777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777744444444444477777777777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774444444444444444444477777777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774444444444444444444477777777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774444444444444444444444477777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444444444444477777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444444444444477777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444444444444477777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444444444444477777777777777
    777777eeeee7777777774777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7774444444444444444444444477777777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777744444444444444444444477777777777777777
    777777eeeee7777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb7777744444444444444444444477777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb277777777777e444444444777777777777777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb777777777777eeeee77777777777777777777777777
    777777277777777277777777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777777777eeeee77777777777777777777777777
    777777777777777777777777777777777bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777477777eeeee77777777727777777777777777
    777777777777777777777777747777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777777777eeeee77777777777777777777777777
    777777777777777777777277777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd774777777777eeeee77777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777777777eeeee77777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777777777eeeee77777777777777777777777777
    777777777477777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777777777777eeeee77777777747777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd777772777777eeeee77777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777774777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777727777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777774777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777477777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    777777777777777777777777777777777dddddddddddddddddfffffffffffffffffffff55555ffffffffffffffffffffffddddddddddddddddddd7777777777777777777777777777777777777777777
    `)
mr_goose = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . b f b . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f 1 f 1 f . . . . . . 
    . . . . f b b b b b f . . . . . 
    . . . . f 1 b f b 1 f . . . . . 
    . . . . . f 1 b 1 f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let chad = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 d d d d d 5 . . . . . 
    . . . . 5 d f d f d 5 . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . 6 7 7 7 7 7 6 . . . . . 
    . . . . 6 7 2 2 2 7 6 . . . . . 
    . . . . 6 7 7 7 7 7 6 . . . . . 
    . . . . d 8 8 8 8 8 d . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let virgin = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . . e e d d e d e e . . . . 
    . . . . e d d d d d d e . . . . 
    . . . . d d f d d f d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . a b b b b b b a . . . . 
    . . . . a b b b b b b a . . . . 
    . . . . a b b b b b b a . . . . 
    . . . . a b b b b b b a . . . . 
    . . . . d c c c c c c d . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
let normies = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f d d d d d f . . . . . 
    . . . . d d f d f d d . . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . 8 6 6 6 6 6 8 . . . . . 
    . . . . 8 6 6 6 6 6 8 . . . . . 
    . . . . 8 6 8 8 8 6 8 . . . . . 
    . . . . 8 6 6 6 6 6 8 . . . . . 
    . . . . d e e e e e d . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Enemy)
let poop = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . f 1 1 1 f . . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let poop_bazuka = sprites.create(img`
    . . . . f . . . . . . . . . . . 
    . . f f 1 f . . . . f . . . . . 
    . f 1 1 1 f . . f f 1 f . . . . 
    . f 1 1 1 1 f f 1 1 1 1 f . . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 f . . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . f 1 1 1 1 1 1 1 1 1 1 f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
    f 1 1 1 1 1 1 1 1 1 1 1 1 f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 f f 1 1 1 1 1 1 1 f . . 
    . f 1 f . . f 1 1 1 1 f f . . . 
    . . f . . . . f 1 f f . . . . . 
    . . . . . . . . f . . . . . . . 
    `, SpriteKind.Projectile)
poop.destroy()
poop_bazuka.destroy()
virgin.y = 100
mr_goose.setPosition(80, 15)
normies.setPosition(80, 100)
virgin.setPosition(80, 100)
chad.setPosition(80, 100)
chad.x += randint(-2, 2) * 30
virgin.x += randint(-2, 2) * 30
normies.x += randint(-2, 2) * 30
forever(function () {
    console.log(poopTimer)
    if (poopTimer == 0) {
        pause(500)
        poopTimer = 1
    }
    if (poopTimer == 1 && controller.A.isPressed()) {
        poop = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 1 f . . . . . . . . 
            . . . . f 1 1 1 f . . . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mr_goose, 0, 50)
        poopTimer = 0
    }
})
forever(function () {
    normSpeed = 3
    normInitalSpeed = 0.5
    normies.setVelocity(0, 0 - (normInitalSpeed + normSpeed * 1 * game.runtime() / 300))
})
forever(function () {
    virginSpeed2 = 3
    virginInitalSpeed2 = 0.5
    virgin.setVelocity(0, 0 - (virginInitalSpeed2 + virginSpeed2 * 0.5 * game.runtime() / 300))
})
forever(function () {
    chadSpeed = 3
    chadInitalSpeed = 0.5
    chad.setVelocity(0, 0 - (chadInitalSpeed + chadSpeed * 1.5 * game.runtime() / 100))
    if (true) {
    	
    }
})

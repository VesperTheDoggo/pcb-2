controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, PlayerMain, 0, 50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerMain.x += -30
    if (PlayerMain.x <= 20) {
        PlayerMain.setPosition(20, 15)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerMain.x += 30
    if (PlayerMain.x >= 140) {
        PlayerMain.setPosition(140, 15)
    }
})
let projectile: Sprite = null
let PlayerMain: Sprite = null
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
let mr_goose = sprites.create(img`
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
controller.moveSprite(mr_goose)
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
    . . . . . f e f . . . . . . . . 
    . . . . f e e e f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let poop_bazuka = sprites.create(img`
    . . . . f . . . . . . . . . . . 
    . . f f e f . . . . f . . . . . 
    . f e e e f . . f f e f . . . . 
    . f e e e e f f e e e e f . . . 
    . f e e e e e e e e e e e f . . 
    . . f e e e e e e e e e f . . . 
    . . f e e e e e e e e f . . . . 
    . . f e e e e e e e e e f . . . 
    . f e e e e e e e e e e f . . . 
    f e e e e e e e e e e e e f . . 
    f e e e e e e e e e e e e f . . 
    . f e e e e e e e e e e e e f . 
    . f e e f f e e e e e e e f . . 
    . f e f . . f e e e e f f . . . 
    . . f . . . . f e f f . . . . . 
    . . . . . . . . f . . . . . . . 
    `, SpriteKind.Projectile)
PlayerMain = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 3 3 3 . . 
    . . . . . . . . . . . 3 2 3 . . 
    . . . . . . . . . . . 3 3 3 3 . 
    . . . . . . . . . . . 3 3 . . . 
    . . . . . . . . . . . 3 . . . . 
    3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let EnemyMain = sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 . . . . . . 8 . . . . . . . 8 
    8 8 . . . . . 8 . . . . . . . 8 
    . 8 . . . . . 8 . . . . . . . 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 . . . . . . . . . . 8 . . 
    . . 8 . . . . . . . . . . 8 . . 
    . . 8 8 . . . . . . . . . 8 . . 
    . . . 8 . . . . . . . . 8 8 . . 
    . . . 8 . . . . . . . . 8 . . . 
    . . . . 8 . . . . . . . 8 . . . 
    . . . . . 8 . . . . . 8 8 . . . 
    . . . . . 8 8 . . . . 8 . . . . 
    . . . . . . 8 8 . . 8 8 . . . . 
    . . . . . . . 8 8 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
PlayerMain.y = 15
EnemyMain.y = 100
game.onUpdateInterval(1000, function () {
    EnemyMain.x = randint(-2, 2) * 30
    if (EnemyMain.x >= 140) {
        EnemyMain.setPosition(140, 100)
    }
    if (EnemyMain.x <= 20) {
        EnemyMain.setPosition(20, 100)
    }
})
forever(function () {
	
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    virgin.destroy()
})
let poop: Sprite = null
let virgin: Sprite = null
let mr_goose: Sprite = null
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
virgin = sprites.create(img`
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
poop = sprites.create(img`
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
mr_goose.y = 15
virgin.y = 100
game.onUpdateInterval(1000, function () {
    virgin.x = randint(-2, 2) * 30
    if (virgin.x >= 140) {
        virgin.setPosition(140, 100)
    }
    if (virgin.x <= 20) {
        virgin.setPosition(20, 100)
    }
})

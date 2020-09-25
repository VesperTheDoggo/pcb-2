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
    sprite.destroy()
    otherSprite.setPosition(80, 100)
    otherSprite.x += randint(-2, 2) * 30
    otherSprite.y = 120
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let poop: Sprite = null
let mr_goose: Sprite = null
let normieDeath = 0
let virginDeaths = 0
let chadDeaths = 0
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
let chad2 = sprites.create(img`
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
let virgin2 = sprites.create(img`
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
let normies2 = sprites.create(img`
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
normies2.setPosition(80, 130)
virgin2.setPosition(80, 130)
chad2.setPosition(80, 130)
chad2.x += randint(-2, 2) * 30
virgin2.x += randint(-2, 2) * 30
normies2.x += randint(-2, 2) * 30
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
poop.destroy()
poop_bazuka.destroy()
mr_goose.setPosition(80, 15)
normies.setPosition(80, 130)
virgin.setPosition(80, 130)
chad.setPosition(80, 130)
chad.x += randint(-2, 2) * 30
virgin.x += randint(-2, 2) * 30
normies.x += randint(-2, 2) * 30
info.setScore(0)
let chadSpeed = 0.5
let normSpeed = 0.35
let virginSpeed = 0.2
forever(function () {
    virgin.setVelocity(0, 0 - (virginSpeed + game.runtime() * 0.5 / 300))
    if (virgin.y == 15) {
        game.over(false, effects.blizzard)
    }
})
forever(function () {
    pause(10000)
    chad2.setVelocity(0, 0 - (chadSpeed + game.runtime() * 1.5 / 300))
    if (chad2.y == 15) {
        game.over(false, effects.blizzard)
    }
})
forever(function () {
    pause(7500)
    normies2.setVelocity(0, 0 - (normSpeed + game.runtime() * 1 / 300))
    if (normies2.y == 15) {
        game.over(false, effects.blizzard)
    }
})
forever(function () {
    pause(5000)
    virgin2.setVelocity(0, 0 - (virginSpeed + game.runtime() * 0.5 / 300))
    if (virgin2.y == 15) {
        game.over(false, effects.blizzard)
    }
})
forever(function () {
    pause(5000)
    chad.setVelocity(0, 0 - (chadSpeed + game.runtime() * 1.5 / 300))
    if (chad.y == 15) {
        game.over(false, effects.blizzard)
    }
})
forever(function () {
    pause(2000)
    normies.setVelocity(0, 0 - (normSpeed + game.runtime() * 1 / 300))
    if (normies.y == 15) {
        game.over(false, effects.blizzard)
    }
})

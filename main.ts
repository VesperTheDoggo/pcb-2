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

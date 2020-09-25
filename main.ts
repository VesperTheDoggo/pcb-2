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
    if (true) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PlayerMain.x += 30
    if (true) {
    	
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
forever(function () {
	
})

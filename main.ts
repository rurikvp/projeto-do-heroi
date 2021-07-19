namespace SpriteKind {
    export const tocha = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const GOLPE = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PERSONA.vy == 0) {
        PERSONA.setVelocity(0, -150)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pegou == false && tiles.getTileLocation(PERSONA, PERSONA) == 0) {
        game.setDialogTextColor(randint(1, 13))
        game.setDialogCursor(img`
            9999.9999.9999.9999.
            9..9.9..9.9..9.9....
            9999.9999.9999.9999.
            9....9.99.9.......9.
            9....9..9.9999.9999.
            ....................
            ....................
            ..........99........
            ........9999........
            ........9..99.......
            ......99....9.......
            .....999999999......
            .....9.......9......
            ....9........99..9..
            ....................
            ....................
            `)
        game.setDialogFrame(img`
            ..66666666666666666666..
            .6699999999999999999966.
            669991111111111111199966
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            699911111111111111119996
            669991111111111111199966
            .6699999999999999999966.
            ..66666666666666666666..
            `)
        game.showLongText("É perigoso seguir sozinho", DialogLayout.Top)
        game.showLongText("Leve isto", DialogLayout.Center)
        game.splash("parabens")
        game.splash("Você adquiriu uma espada")
        pegou = true
    }
})
function atacar (bool: boolean) {
    ataque = sprites.create(img`
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        . . . . . . . . . . . . 
        `, SpriteKind.GOLPE)
    if (bool) {
        ataque.setPosition(PERSONA.x + PERSONA.width + 6, PERSONA.y)
    } else {
        ataque.setPosition(PERSONA.x - PERSONA.width - 6, PERSONA.y)
    }
    timer.after(425, function () {
        ataque.destroy()
    })
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("ATACAR", 1000, function () {
        if (pegou == true) {
            if (lado == true) {
                animation.runImageAnimation(
                PERSONA,
                [img`
                    ........................
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef...cc.......
                    .ffffee2222ef.cdc.......
                    .fe222ffffe2fcddc.......
                    fffffffeeeffcddc........
                    ffe44ebf44ecddc.........
                    fee4d41fddecdc..........
                    .feee4dddedccc..........
                    ..ffee44e4dde...........
                    ...f222244ee............
                    ...f2222e2f.............
                    ...f444455f.............
                    ....ffffff..............
                    .....fff................
                    ........................
                    `,img`
                    ........................
                    .......fff..............
                    ....fffff2f.............
                    ..ffeeeee22ff...........
                    .ffeeeeee222ff..........
                    .feeeefffeeeef..........
                    .fffffeee2222ef.........
                    fffe222fffffe2f.........
                    fffffffffeeefff.....cc..
                    fefe44ebbf44eef...ccdc..
                    .fee4d4bbfddef..ccddcc..
                    ..feee4dddddfeecdddc....
                    ...f2222222eeddcdcc.....
                    ...f444445e44ddccc......
                    ...ffffffffeeee.........
                    ...fff...ff.............
                    ........................
                    ........................
                    `,img`
                    .......ff...............
                    ....ffff2ff.............
                    ..ffeeeef2ff............
                    .ffeeeeef22ff...........
                    .feeeeffeeeef...........
                    .fffffee2222ef..........
                    fffe222ffffe2f..........
                    ffffffffeeefff..........
                    fefe44ebf44eef..........
                    .fee4d4bfddef...........
                    ..feee4dddee.c..........
                    ...f2222eeddeccccccc....
                    ...f444e44ddecddddd.....
                    ...fffffeeee.ccccc......
                    ..ffffffff...c..........
                    ..fff..ff...............
                    ........................
                    ........................
                    `,img`
                    ....ffffff..............
                    ..ffeeeef2f.............
                    .ffeeeef222f............
                    .feeeffeeeef............
                    .ffffee2222ef...........
                    .fe222ffffe2f...........
                    fffffffeeefff...........
                    ffe44ebf44eef...........
                    fee4d41fddef............
                    .feee4ddddf.............
                    ..fdde444ef.............
                    ..fdde22ccc.............
                    ...eef22cdc.............
                    ...f4444cddc............
                    ....fffffcddc...........
                    .....fff..cddc..........
                    ...........cdc..........
                    ............cc..........
                    `],
                100,
                false
                )
            } else if (lado == false) {
                animation.runImageAnimation(
                PERSONA,
                [img`
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    .......cc...feeeeffeeef.
                    .......cdc.fe2222eeffff.
                    .......cddcf2effff222ef.
                    ........cddcffeeefffffff
                    .........cddce44fbe44eff
                    ..........cdceddf14d4eef
                    ..........cccdeddd4eeef.
                    ...........edd4e44eeff..
                    ............ee442222f...
                    .............f2e2222f...
                    .............f554444f...
                    ..............ffffff....
                    ................fff.....
                    ........................
                    ........................
                    `,img`
                    ........................
                    ..............fff.......
                    .............f2fffff....
                    ...........ff22eeeeeff..
                    ..........ff222eeeeeeff.
                    ..........feeeefffeeeef.
                    .........fe2222eeefffff.
                    .........f2efffff222efff
                    ..cc.....fffeeefffffffff
                    ..cdcc...fee44fbbe44efef
                    ..ccddcc..feddfbb4d4eef.
                    ....cdddceefddddd4eeef..
                    .....ccdcddee2222222f...
                    ......cccdd44e544444f...
                    .........eeeeffffffff...
                    .............ff...fff...
                    ........................
                    ........................
                    `,img`
                    ...............ff.......
                    .............ff2ffff....
                    ............ff2feeeeff..
                    ...........ff22feeeeeff.
                    ...........feeeeffeeeef.
                    ..........fe2222eefffff.
                    ..........f2effff222efff
                    ..........fffeeeffffffff
                    ..........fee44fbe44efef
                    ...........feddfb4d4eef.
                    ..........c.eeddd4eeef..
                    ....ccccccceddee2222f...
                    .....dddddcedd44e444f...
                    ......ccccc.eeeefffff...
                    ..........c...ffffffff..
                    ...............ff..fff..
                    ........................
                    ........................
                    `,img`
                    ..............ffffff....
                    .............f2feeeeff..
                    ............f222feeeeff.
                    ............feeeeffeeef.
                    ...........fe2222eeffff.
                    ...........f2effff222ef.
                    ...........fffeeefffffff
                    ...........fee44fbe44eff
                    ............feddf14d4eef
                    .............fdddd4eeef.
                    .............fe444eddf..
                    .............ccc22eddf..
                    .............cdc22fee...
                    ............cddc4444f...
                    ...........cddcfffff....
                    ..........cddc..fff.....
                    ..........cdc...........
                    ..........cc............
                    `],
                100,
                false
                )
            }
            atacar(lado)
        }
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PERSONA,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
    lado = false
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    if (status == statusbar2) {
        game.over(false)
    }
    statusbar.spriteAttachedTo().destroy(effects.halo, 5000)
    status.destroy(effects.trail, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    PERSONA,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
    lado = true
})
function criarmonstro () {
    cobra = sprites.create(img`
        . . . . c c c c c c . . . . . . 
        . . . c 6 7 7 7 7 6 c . . . . . 
        . . c 7 7 7 7 7 7 7 7 c . . . . 
        . c 6 7 7 7 7 7 7 7 7 6 c . . . 
        . c 7 c 6 6 6 6 c 7 7 7 c . . . 
        . f 7 6 f 6 6 f 6 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 6 c 7 7 6 f c . . 
        . . . f c c c c 7 7 6 f 7 7 c . 
        . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
        . c 7 7 2 7 7 c f c 6 7 7 6 c c 
        c 1 1 1 1 7 6 f c c 6 6 6 c . . 
        f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
        f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
        . f 6 1 1 1 1 1 1 6 6 6 f . . . 
        . . c c c c c c c c c f . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(cobra, tiles.util.object4)
    tiles.setTileAt(tiles.getTileLocation(8, 13), assets.tile`transparency16`)
    statusbar = statusbars.create(20, 2, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(cobra, 2, 0)
    statusbar.setColor(7, 2, 13)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
function criarNPC () {
    cavalo = sprites.create(img`
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        . . 8 8 d d d d d d 8 8 8 8 . . 
        . . 8 8 d d d d d d d 8 8 8 8 8 
        . . 8 1 d f d d f d d 1 8 8 8 8 
        . . 8 1 d d d d d d 1 1 8 8 8 8 
        . . 8 1 1 1 1 1 1 1 1 8 8 8 8 8 
        . . f 8 1 1 f f 1 1 1 8 8 8 . . 
        . . f 8 8 1 1 1 1 1 8 f 8 . . . 
        . 8 f 8 8 8 f 8 8 8 8 f 8 . . . 
        . 8 5 5 5 f 5 f 5 5 5 f . . . . 
        . 8 5 5 5 f f f 5 5 5 f . . . . 
        . 8 f 8 8 8 8 8 8 8 8 8 . . . . 
        . 8 f 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . 8 8 e e e 8 8 8 e e e 8 8 . . 
        . . e e e e . . e e e e . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(cavalo, tiles.util.object3)
    tiles.setTileAt(tiles.getTileLocation(24, 13), assets.tile`transparency16`)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -35
    PERSONA.setFlag(SpriteFlag.GhostThroughSprites, true)
    if (lado) {
        animation.runMovementAnimation(
        PERSONA,
        animation.animationPresets(animation.waveLeft),
        1000,
        false
        )
        animation.runMovementAnimation(
        PERSONA,
        animation.animationPresets(animation.waveLeft),
        1000,
        false
        )
    } else {
        animation.runMovementAnimation(
        PERSONA,
        animation.animationPresets(animation.waveRight),
        1000,
        false
        )
        animation.runMovementAnimation(
        PERSONA,
        animation.animationPresets(animation.waveRight),
        1000,
        false
        )
    }
    timer.after(1500, function () {
        PERSONA.setFlag(SpriteFlag.GhostThroughSprites, false)
    })
})
function criartocha () {
    tocha2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 4 . 
        . . . . . . . . . . . . 4 4 4 . 
        . . . . . . . . . 4 4 4 4 4 4 . 
        . . . . . . . . . 4 5 5 4 4 4 . 
        . . . . e e e e e e 2 5 4 4 4 . 
        e e e e e e e e e e 2 5 4 4 . . 
        `, SpriteKind.tocha)
    tiles.placeOnRandomTile(tocha2, tiles.util.object0)
    tiles.setTileAt(tiles.getTileLocation(11, 13), assets.tile`transparency16`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tocha, function (sprite, otherSprite) {
    otherSprite.destroy()
    lantern.startLanternEffect(PERSONA)
    lantern.setLightBandWidth(35)
    game.splash("voce pegou uma tocha", "agora sigua em frente")
})
function criarpersona () {
    PERSONA = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `, SpriteKind.Player)
    PERSONA.setPosition(133, 215)
    scene.cameraFollowSprite(PERSONA)
    controller.moveSprite(PERSONA, 100, 0)
    PERSONA.ay = 500
    statusbar2 = statusbars.create(75, 4, StatusBarKind.Health)
    statusbar2.value = 150
    statusbar2.setColor(7, 2, 9)
    statusbar2.attachToSprite(PERSONA)
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar2.setLabel("HP")
    statusbar2.setOffsetPadding(0, 55)
}
sprites.onOverlap(SpriteKind.GOLPE, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    statusbar.value += -25
})
let cavalo: Sprite = null
let cobra: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let ataque: Sprite = null
let PERSONA: Sprite = null
let lado = false
let pegou = false
let tocha2: Sprite = null
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
criarmonstro()
criarpersona()
criartocha()
criarNPC()
lantern.setBreathingEnabled(true)
lantern.startLanternEffect(tocha2)
lantern.setLightBandWidth(20)
pegou = false
lado = true
game.onUpdateInterval(2500, function () {
    if (!(controller.anyButton.isPressed())) {
        animation.stopAnimation(animation.AnimationTypes.All, PERSONA)
    }
})

/* global game */

var RemotePlayer = function (index, game, player, startX, startY) {
  var x = startX
  var y = startY

  this.game = game
  this.health = 3
  this.player = player
  this.alive = true

  this.player = game.add.sprite(x, y, 'enemy')

  this.player.animations.add('move-right', [0, 1, 2, 3, 4, 5, 6, 7], 20, true)
  this.player.animations.add('move-up', [8, 9, 10, 11, 12, 13, 14, 15], 20, true)
  this.player.animations.add('move-left', [56, 57, 58, 59, 60, 61, 62, 63], 20, true)
  this.player.animations.add('move-down', [32, 33, 34, 35, 36, 37, 38, 39], 20, true)
  this.player.animations.add('move-up-right', [16, 17, 18, 19, 20, 21, 22, 23], 20, true)
  this.player.animations.add('move-up-left', [24, 25, 26, 27, 28, 29, 30, 31], 20, true)
  this.player.animations.add('move-down-left', [48, 49, 50, 51, 52, 53, 54, 55], 20, true)
  this.player.animations.add('move-down-right', [40, 41, 42, 43, 44, 45, 46, 47], 20, true)
  this.player.animations.add('stop', [3], 20, true)

  this.player.anchor.setTo(0.5, 0.5)

  this.player.name = index.toString()
  game.physics.enable(this.player, Phaser.Physics.ARCADE)
  this.player.body.immovable = true
  this.player.body.collideWorldBounds = true

  this.player.angle = game.rnd.angle()

  this.lastPosition = { x: x, y: y }
}

RemotePlayer.prototype.update = function () {
  if (this.player.x !== this.lastPosition.x || this.player.y !== this.lastPosition.y) {
    // this.player.play('move')
    this.player.rotation = Math.PI + game.physics.arcade.angleToXY(this.player, this.lastPosition.x, this.lastPosition.y)
  } else {
    this.player.play('stop')
  }

  this.lastPosition.x = this.player.x
  this.lastPosition.y = this.player.y
}

window.RemotePlayer = RemotePlayer

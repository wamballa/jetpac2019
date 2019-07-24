import "phaser";

export default class Obstacle extends Phaser.GameObjects.Sprite {
  constructor(config) {
    // console.log ("PLATFORMS CONSTRUCTOR");

    super(config.scene, config.x, config.y, config.key);
    this.GAME = config.scene;
	// this.GAME.physics.world.enableBody(this);
	this.GAME.physics.world.enable(this);
	this.body.allowGravity = false;
	this.body.immovable = false;
    this.HUD_HEIGHT = 60;
    this.SCALE = config.scale;
    this.SPRITE = config.sprite;
    this.x = config.x;
    this.y = config.y;

    // this.enableBody = true;
    this.smoother = false;
    // this.body.setSize (this.width, this.height, 0, 0);
    // this.body.immovable = true;

    this.GAME.add.existing(this);
  }

  update() {} // update
}

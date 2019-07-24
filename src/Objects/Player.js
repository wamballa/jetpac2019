class Player extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.key);
    this.GAME = config.scene;
    this.PLAYER = config.key;
    // console.log('this = ',this.GAME);
    // console.log('player.this = ',this);
    this.GAME.physics.world.enable(this);
    this.GAME.add.existing(this);
    this.body.drag.x = 25;
    this.body.maxVelocity.x = 200;
    this.body.maxVelocity.y = 250;
    this.setOrigin(0.5, 0.5);
    this.setMass = 1;
    this.cursors = this.GAME.input.keyboard.createCursorKeys();
    // this.anims.play('right');
    this.init();
  }

  init() {
    console.log("Player init. this.GAME ", this.GAME);
    console.log("Player init. this.PLAYER ", this.PLAYER);
    this.create = false;
    this.facingLeft = false;
    this.isFlying = true;
    this.flipX = false;
    // this.facingLeft = false;
    this.SPEED = 100;
    this.preload();
  }
  preload() {
    console.log("Player preload");
    // cant seem to call this.create()
  }
  create() {
    console.log("Player create");
    //  Each time a new animation is added to the Animation Manager we'll call this function
    // this.anims.on('add', addAnimation, this);

    // this.anims.on(Phaser.Animations.Events.ADD_ANIMATION, addAnimation, this);
    // this.anims.create({
    //   key: "left",
    //   frames: [
    //     { key: "jetpac_atlas0.png" },
    //     { key: "jetpac_atlas1.png" },
    //     { key: "jetpac_atlas2.png" },
    //     { key: "jetpac_atlas3.png" }
    //   ],
    //   framerate: 8,
    //   repeat: -1
    // });
    this.anims.create({
      key: 'left',
      // frames: [0, 1, 2, 3],
      frames: this.GAME.player.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'fly',
      // frames: [0, 1, 2, 3],
      frames: this.GAME.player.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
    });
    this.GAME.player.anims.play('fly');
  }
  update() {
    this.checkKeys();
    if (this.x > 800 - this.body.halfWidth) this.x = this.body.halfWidth;
    if (this.x < this.body.halfWidth) this.x = 800 - this.body.halfWidth;
    if (this.y < this.body.height) {
      console.log("reached top");
      this.y = this.body.height;
      this.body.setAccelerationY(0);
      // this.body.velocity.y = 0;
    }
  }

  checkKeys() {
    if (this.body.touching.none) {
      this.body.drag.x = 25;
    } else {
      this.body.drag.x = 150;
    }

    if (this.cursors.space.isDown) {
      console.log("Fire button pressed ");
    }
    // RIGT BUTTON
    if (this.cursors.right.isDown) {
      // console.log("Right button pressed " + this.facingLeft);
      if (this.facingLeft == true){
        this.flipX = false;
        this.facingLeft = false;
      }
      if (this.body.touching.down) {
        this.body.velocity.x = this.SPEED * 0.8;
      } else {
        this.body.velocity.x = this.SPEED;
      }
    }
    // LEFT BUTTON
    if (this.cursors.left.isDown) {
      // console.log("Left  button pressed " + this.player.anims.play("left"));
      this.GAME.player.anims.play('left');
      if (this.facingLeft == false){
        this.flipX = true;
        this.facingLeft = true;
      }

      if (this.body.touching.down) {
        this.body.velocity.x = -this.SPEED * 0.8;
      } else {
        this.body.velocity.x = -this.SPEED;
      }
    }

    // UP BUTTON
    if (this.cursors.up.isDown) {
      console.log("UP button pressed");
      //   console.log("Player update SPEEED " + this.SPEED);
      // this.facingLeft = true;
      this.body.velocity.y = -this.SPEED;
      //   this.body.setAccelerationX(-this.SPEED);
    }
  }
}

class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
    // super({
    //   key: 'Level1'
    // });
  }

  init() {
    console.log("Level 1 init - setup parameters");
  }

  preload() {
    console.log("Level1 preload - load images etc");
    // load images


    // this.game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  create() {
    console.log("Level1 create - create entities for game");

    this.player = new Player({
      scene: this,
      x: 500,
      y: 100,
      key: 'player'
    });


    // this.impact.world.setBounds();

    var platforms;
    platforms = this.physics.add.staticGroup();

    platforms.create(500,400,'ledge4');
    platforms.create(100,400,'ledge4');
    platforms.create(300,400,'ledge4');
    platforms.create(400,550,'ground');

    // this.impact.add.image(400,550,'ground').setFixedCollision().setGravity(0).setBodyScale(1.0);
    this.physics.add.collider(this.player,platforms);
  
  }

  update() {
    // do something
    this.player.update();

    // collisions
    // player hits platform
    // var hitPlatform = this.physics.add.collider(
    //   this.player,
    //   this.platforms
    // );
    // if (hitPlatform) console.log('collide');
  }
}

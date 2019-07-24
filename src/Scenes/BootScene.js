class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    console.log("BootScene");
    // this.load.image('logo', 'assets/zenva_logo.png');
    this.load.image("logo", "assets/logo.gif");

    /* Preload required assets */
    this.load.image('logo', 'assets/player2.png');

    //PLAYER
    // this.load.atlas(
    //   "player",
    //   "assets/player/jetpac_atlas.png",
    //   "assets/player/jetpac_atlas.json"
    // );
    this.load.spritesheet ('player' ,'assets/player/jetpac_atlas.png', { frameWidth: 43, frameHeight: 56 });
    //CLOUD
    this.load.atlas(
      "cloud",
      "assets/cloud_atlas.png",
      "assets/cloud_hash.json"
    );
    this.load.image("ground", "assets/ground.png");
    this.load.image("ledge4", "assets/ledge4.png");
    this.load.image("ledge6", "assets/ledge6.png");
    this.load.image("topMargin", "assets/topmargin.png");
    this.load.image("bullet", "assets/bullet.png");
    this.load.image("fuel", "assets/fuel.png");
    this.load.image("shipBot", "assets/ship1.png");
    this.load.image("shipMid", "assets/ship2.png");
    this.load.image("shipTop", "assets/ship3.png");
    this.load.spritesheet("exhaust", "assets/exhaust.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    // //			ENEMIES
    this.load.spritesheet("fireball", "assets/fireball.png", {
      frameWidth: 32,
      frameHeight: 22
    });
    this.load.spritesheet("fuzzball", "assets/fuzzball.png", {
      frameWidth: 16,
      frameHeigh: 14
    });

    // 			TREASURE
    this.load.image("goldbar", "assets/goldbar.png");
    this.load.image("blob", "assets/blob.png");
    this.load.image("nuclear", "assets/nuclear.png");
    this.load.image("triangle", "assets/triangle.png");
    this.load.spritesheet("diamond", "assets/diamond.png", {
      frameHeight: 31,
      frameWidth: 28
    });

    // 			FONTS
    this.load.bitmapFont(
      "fat-and-tiny",
      "assets/fat-and-tiny.png",
      "assets/fat-and-tiny.xml"
    );
    // this.load.bitmapFont("assets/digits");
    this.load.image("livesIcon", "assets/lives.png");
    this.load.image ('splash', 'assets/splash.png');
  }

  create() {
    this.scene.start("Preloader");
  }
}

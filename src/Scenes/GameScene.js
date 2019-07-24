import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    console.log("GameScene");
    this.load.image('logo', 'assets/logo.png');
  }

  create () {
    this.add.image(400, 300, 'logo');
  }
};

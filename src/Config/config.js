const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: {
            y: 100.0
        },
        debug: true
    }
  }
};

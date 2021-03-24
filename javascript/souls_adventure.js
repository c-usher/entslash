import WorldScene from "./scenes/WorldScene.js";

const config = {
  width: 1280,
  height: 720,
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  parent: "game",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [WorldScene],
};

new Phaser.Game(config);
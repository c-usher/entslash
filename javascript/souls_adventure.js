import WorldScene from "./scenes/WorldScene.js";
import Hero from "./scenes/Hero.js";

const config = {
  width: 1280,
  height: 720,
  render: {
    antialias: false,
  },
  type: Phaser.AUTO,
  parent: "game",
  pixelArt: true,
  physics: { default: "arcade" },
  scene: [WorldScene],
  autoCenter: Phaser.Scale.CENTER_BOTH
};

new Phaser.Game(config);

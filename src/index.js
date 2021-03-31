import Phaser from "phaser";
import WorldScene from "./javascript/classes/WorldScene";
import UiScene from "./javascript/classes/UiScene";

const config = {
  width: 1280,
  height: 720,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.DOM.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    parent: "game",
  },
  pixelArt: true,
  scene: [WorldScene, UiScene],
};

new Phaser.Game(config);

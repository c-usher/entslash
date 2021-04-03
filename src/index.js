import Phaser from "phaser";
import WorldScene from "./javascript/classes/scenes/WorldScene";
import UiScene from "./javascript/classes/scenes/UiScene";
import TitleScene from "./javascript/classes/scenes/TitleScene";
import GameOverScene from "./javascript/classes/scenes/GameOverScene";
import Preloader from "./javascript/classes/Preloader";

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
  scene: [Preloader, TitleScene, UiScene, GameOverScene, WorldScene],
};

new Phaser.Game(config);

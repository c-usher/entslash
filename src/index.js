import Phaser from "phaser";
import WorldScene from "./javascript/classes/scenes/WorldScene";
import UiScene from "./javascript/classes/scenes/UiScene";
import TitleScene from "./javascript/classes/scenes/TitleScene";
import GameOverScene from "./javascript/classes/scenes/GameOverScene";
import Preloader from "./javascript/classes/Preloader";
import WinScene from "./javascript/classes/scenes/WinScene";

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
  pixelArt: true, //Stops Phaser from trying to smooth out the images
  scene: [Preloader, TitleScene, WinScene, GameOverScene, WorldScene, UiScene],
};

new Phaser.Game(config);

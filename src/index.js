import Phaser from 'phaser';
import WorldScene from './javascript/scenes/WorldScene'


const config = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      debug:true
    }
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: "game"
  
    },
    pixelArt: true,
    scene: [WorldScene]
  };
  
  new Phaser.Game(config);
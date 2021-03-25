import Phaser from 'phaser';



const config = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      parent: "game"
  
    },
    pixelArt: true,
    scene: [WorldScene],
  };
  
  new Phaser.Game(config);



// import logoImg from './assets/logo.png';

// class MyGame extends Phaser.Scene
// {
//     constructor ()
//     {
//         super();
//     }

//     preload ()
//     {
//         this.load.image('logo', logoImg);
//     }
      
//     create ()
//     {
//         const logo = this.add.image(400, 150, 'logo');
      
//         this.tweens.add({
//             targets: logo,
//             y: 450,
//             duration: 2000,
//             ease: "Power2",
//             yoyo: true,
//             loop: -1
//         });
//     }
// }

// const config = {
//     type: Phaser.AUTO,
//     parent: 'phaser-example',
//     width: 800,
//     height: 600,
//     scene: MyGame
// };

// const game = new Phaser.Game(config);

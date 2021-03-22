import WorldScene from './WorldScene.js';


const config = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [WorldScene]
}

new Phaser.Game(config);
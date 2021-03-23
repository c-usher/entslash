import WorldScene from './scenes/WorldScene.js';
// import Hero from './scenes/Hero.js'


const config = {
    width: 1280,
    height: 720,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [WorldScene]
}

new Phaser.Game(config);
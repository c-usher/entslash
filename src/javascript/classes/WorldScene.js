import Hero from './Hero'
export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }

  preload() {

    this.cursors
    this.cameras.main.setBackgroundColor(0x9900e3)

    this.hero
    this.keys

    this.load.tilemapTiledJSON("map", "/src/json/world_map.json");

    this.load.image("building_tiles", "/src/assets/world_map/building_tiles-0.png");

    this.load.image(
      "environment_tiles_1",
      "/src/assets/world_map/environment_tiles-0.png"
    );

    this.load.image(
      "environment_tiles_2",
      "/src/assets/world_map/environment_tiles2.png"
    );

    this.load.image(
      "ground_tiles_1",
      "/src/assets/world_map/ground_tile_set-0.png"
    );

    this.load.image(
      "ground_tiles_2",
      "/src/assets/world_map/ground_tile_set-1.png"
    );

      //Load Hero Sprite Sheet
     this.load.spritesheet('heroSheet', '/src/assets/sprites/hero/hero_sprite.png', {
        frameWidth: 22,
        frameHeight: 23,
        startFrame: 0,
        endFrame: 11
     });
    
    //Load Enemy Two Sprite Sheet
    // this.load.spritesheet('enemyTwoSheet', '/src/assets/sprites/enemy_two/enemy_two_sprite.png', {
    //   frameWidth: 22,
    //   frameHeight: 23,
    //   startFrame: 0,
    //   endFrame: 11
    // });
    this.load.atlas('enemyTwoSheet', '/src/assets/sprites/enemy_two/enemy_two_sprite.png', '/src/json/enemy_two_sprite.json');
      
  }//preload;

  create() {
    const map = this.make.tilemap({
      key: "map"
    });

    const building_tiles = map.addTilesetImage(
      "building_tiles-0",
      "building_tiles"
    );

    const environment_tiles_1 = map.addTilesetImage(
      "environment_tiles-0",
      "environment_tiles_1"
    );

    const environment_tiles_2 = map.addTilesetImage(
      "environment_tiles2",
      "environment_tiles_2"
    );

    const ground_tiles_1 = map.addTilesetImage(
      "ground_tile_set-0",
      "ground_tiles_1"
    );

    const ground_tiles_2 = map.addTilesetImage(
      "ground_tile_set-1",
      "ground_tiles_2"
    );

    const tiles = [
      ground_tiles_1,
      ground_tiles_2,
      environment_tiles_1,
      environment_tiles_2,
      building_tiles,
    ];

    const belowLayer = map.createLayer('below', tiles);
    const midLayer = map.createLayer('mid', tiles);
    const aboveLayer = map.createLayer('above', tiles);
    aboveLayer.scale = 0.5;
    midLayer.scale = 0.5;
    belowLayer.scale = 0.5;
  
    //Creates Hero from Hero.js
    this.hero = new Hero(this, 200, 200, 'heroSheet')
    this.hero.scale = 1.6;

    //Creates Enemy Two from Enemy.js
    const enemy = this.add.sprite(280, 200, 'enemyTwoSheet')
    enemy.scale = 1.6;
  }//create;

  update() {
    this.hero.update();
  }


  
 

 
}
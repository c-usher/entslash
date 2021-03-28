import Hero from "./Hero";
import Enemy from "./Enemy";
export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }

  preload() {
    this.cursors;
    this.cameras.main.setBackgroundColor(0x9900e3);

    this.hero;
    this.enemy;
    this.keys;
    //Loads Map
    this.load.tilemapTiledJSON("map", "/src/json/world_map.json");

    this.load.image(
      "building_tiles",
      "/src/assets/world_map/building_tiles-0.png"
    );

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
    this.load.spritesheet(
      "heroSheet",
      "/src/assets/sprites/hero/hero_sprite.png",
      {
        frameWidth: 22,
        frameHeight: 23,
        startFrame: 0,
        endFrame: 11,
      }
    );

    //Load Enemy Sprite Sheet
    this.load.atlas(
      "enemyTwoSheet",
      "/src/assets/sprites/enemy_two/enemy_two_sprite.png",
      "/src/json/enemy_two_sprite.json"
    );
  } //preload;

  create() {
    //Creates Map and Tiles
    const map = this.make.tilemap({
      key: "map",
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
    //Creates Layers from the Map and  tiles
    const belowLayer = map.createLayer("below", tiles);
    const midLayer = map.createLayer("mid", tiles);
    const aboveLayer = map.createLayer("above", tiles);
    aboveLayer.scale = 0.5;
    midLayer.scale = 0.5;
    belowLayer.scale = 0.5;
    aboveLayer.setDepth(100);
    midLayer.setDepth(50);
    midLayer.setCollisionByProperty({
      collides: true,
    });
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //Creates Hero from Hero.js
    this.hero = new Hero(this, 400, 200, "heroSheet");
    this.hero.scale = 1.6;
    this.hero.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.hero);
    //Creates Enemy from Enemy.js
    this.enemy = new Enemy(this, 480, 200, "enemyTwoSheet");
    this.enemy.scale = 1.6;
    this.enemy.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.enemy, midLayer);
  } //create;

  update() {
    this.hero.update();
    this.enemy.update();
  } //Update
}

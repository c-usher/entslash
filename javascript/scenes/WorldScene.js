
export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  }

  preload() {

    this.cursors
    this.cameras.main.setBackgroundColor(0x9900e3)

    this.hero
    this.keys
    
    this.load.tilemapTiledJSON("map", "/assets/json/world_map.json");

    this.load.image("building_tiles", "/assets/world_map/building_tiles-0.png");

    this.load.image(
      "environment_tiles_1",
      "/assets/world_map/environment_tiles-0.png"
    );

    this.load.image(
      "environment_tiles_2",
      "/assets/world_map/environment_tiles2.png"
    );

    this.load.image(
      "ground_tiles_1",
      "/assets/world_map/ground_tile_set-0.png"
    );

    this.load.image(
      "ground_tiles_2",
      "/assets/world_map/ground_tile_set-1.png"
    );

      this.load.spritesheet('heroSheet', '../../assets/sprites/hero_sprite.png', {
        frameWidth: 16,
        frameHeight: 16
      });
  }

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
  }
  
 
}
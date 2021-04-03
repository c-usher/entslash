export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }
  preload() {
    //Loads Title Scene Resources <===========================
    this.load.image("gameLogo", "/src/assets/game_logo.png");
    this.load.image("titleBg", "/src/assets/titleScene.png");
    this.load.image("playButton", "/src/assets/play_button.png");
    this.load.image("exitButton", "/src/assets/exit_button.png");

    //Loads World Scene Resources <===========================
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

    //Load Bottle Images
    this.load.image("fullBottle", "/src/assets/sprites/hero/full_bottle.png");
    this.load.image("emptyBottle", "/src/assets/sprites/hero/empty_bottle.png");

    //Load BlackHole Image
    this.load.image("blackHole", "/src/assets/sprites/hero/Black_hole.png");

    //Game Over Scene Resources <===========================
    this.load.image("gameOverLogo", "/src/assets/you_died_logo.png");
    this.load.image("gameOverBg", "/src/assets/game_over_scene.png");
    this.load.image("restartButton", "/src/assets/restart.png");
  } //preload
  create() {
    this.scene.start("preload");
    this.scene.run("titleScene");
  } //Create
} //Class

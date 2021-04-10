export default class Preloader extends Phaser.Scene {
  constructor() {
    super("preloader");
  }
  preload() {
    //Loads Title Scene Resources <===========================
    this.load.image("gameLogo", "/src/assets/logos/game_logo.png");
    this.load.image("titleBg", "/src/assets/scene_backgrounds/titleScene.png");
    this.load.image("playButton", "/src/assets/buttons/play_button.png");
    this.load.image("exitButton", "/src/assets/buttons/exit_button.png");

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
    this.load.image("fullBottle", "/src/assets/trackers/full_bottle.png");
    this.load.image("emptyBottle", "/src/assets/trackers/empty_bottle.png");

    //Load Score Tracker Images
    this.load.image(
      "fullTracker",
      "/src/assets/trackers/full_score_tracker.png"
    );
    this.load.image(
      "emptyTracker",
      "/src/assets/trackers/empty_score_tracker.png"
    );

    //Load BlackHole Image
    this.load.image("blackHole", "/src/assets/sprites/hero/black_hole.png");

    //Game Over Scene Resources <===========================
    this.load.image("gameOverLogo", "/src/assets/logos/you_died_logo.png");
    this.load.image(
      "gameOverBg",
      "/src/assets/scene_backgrounds/game_over_scene.png"
    );
    this.load.image("restartButton", "/src/assets/buttons/restart_button.png");

    //win Scene Resources <===========================
    this.load.image("winLogo", "/src/assets/logos/you_win_logo.png");

    //Loading Scene logic <===========================
    let loadBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff,
      },
    });

    this.load.on("progress", (percent) => {
      loadBar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
    });
  } //preload
  create() {
    this.scene.start("preload");
    this.scene.run("titleScene");
  } //Create
} //Class

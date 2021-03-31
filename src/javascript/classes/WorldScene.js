import Hero from "./Hero";
import Enemy from "./Enemy";
import Hp from "./Hp";
export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  } //Constructor

  preload() {
    this.cursors;
    this.cameras.main.setBackgroundColor(0x9900e3);
    this.cameras.main.setBounds();

    this.hero;
    this.enemy;
    this.enemies;
    this.keys;
    this.hp;
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
    //Collides comes from the map made by tiled
    midLayer.setCollisionByProperty({
      colides: true,
    });
    this.physics.world.bounds.width = 1600;
    this.physics.world.bounds.height = 1600;
    this.cameras.main.setBounds(0, 0, 1600, 1600);

    //Creates Hero from Hero.js
    this.hero = new Hero(this, 400, 200, "heroSheet", 100);
    this.hero.scale = 1.6;
    this.physics.add.collider(this.hero, midLayer);
    this.hero.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.hero);
    console.log(this.hero.hp);

    //Creates Enemy from Enemy.js
    this.enemy = new Enemy(this, 480, 200, "enemyTwoSheet");
    this.enemy.scale = 1.6;
    this.enemy.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.enemy, midLayer);

    //Creates group of enemies
    this.enemies = this.add.group();
    //Spawn enemies until i > 20
    for (let i = 0; i < 20; i++) {
      const e = new Enemy(this, 200 + 20 * i, 280, "enemyTwoSheet"); //Will spawn enemy starting at 200 and then 20 * i +200 after that
      e.body.setCollideWorldBounds(true);
      e.scale = 1.6;
      this.enemies.add(e); //This adds the enemy into the group enemies.
    }
    this.physics.add.collider(this.enemies, midLayer);
    this.physics.add.overlap(
      this.hero,
      this.enemies,
      this.handleBeingCollision,
      null,
      this
    ); //When the Hero and the Enemy from enemies group overlap it will call handle collision method
    this.physics.add.overlap(
      this.hero,
      this.enemy,
      this.handleBeingCollision,
      null,
      this
    ); // When the hero collides with the Big Enemy call handleBeingCollision method;
    this.hp = new Hp(this, this.hero.x, this.hero.y, 100);
  } //create;

  handleBeingCollision(hero, enemy) {
    hero.setTint(0xf00000);
    this.cameras.main.shake(40, 0.02);
    //Time event built into phaser3 for 300 milliseconds the players tint will go red when overlapped by enemy from enemies group
    this.time.addEvent({
      delay: 300,
      callback: () => {
        hero.clearTint();
      },
      callbackScope: this,
      loop: false,
    });
    enemy.killed();
  }
  update() {
    this.hero.update();
    //If the enemy is not dead call update on enemy
    if (!this.enemy.isDead) {
      this.enemy.update();
    }

    //iterates over the children in the enemies group and calls their update function
    this.enemies.children.iterate((child) => {
      if (!child.isDead) {
        child.update(); //Calls update function for each child of enemies.
      }
    });
  } //Update
}

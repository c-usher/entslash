import Hero from "../Hero";
import Enemy from "../Enemy";
import Projectiles from "../Projectile";
import EventsCenter from "../../events/EventsCenter";

export default class WorldScene extends Phaser.Scene {
  constructor() {
    super("WorldScene");
  } //Constructor
  preload() {
    this.cursors;
    this.cameras.main.setBackgroundColor(0x000000);
    this.cameras.main.setBounds();

    this.hero;
    this.enemy;
    this.enemies;
    this.bigEnemy;
    this.keys;
    this.projectiles;
    this.lastCastTime = 0;
  } //preload;

  create() {
    // this.scene.run("UiScene"); // Runs Scene parallel to WorldScene
    this.scene.wake("UiScene");
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
    //Colides comes from the map made by tiled
    midLayer.setCollisionByProperty({
      colides: true,
    });
    this.physics.world.bounds.width = 1600;
    this.physics.world.bounds.height = 1600;
    this.cameras.main.setBounds(0, 0, 1600, 1600);

    //Creates Hero from Hero.js
    this.hero = new Hero(this, 400, 200, "heroSheet", 10);
    this.hero.scale = 1.6;
    this.physics.add.collider(this.hero, midLayer);
    this.hero.body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.hero);

    //Creates Enemy from Enemy.js
    this.bigEnemy = new Enemy(this, 780, 700, "enemyTwoSheet", 5, 100, 5);
    this.bigEnemy.scale = 1.6;
    this.bigEnemy.body.setCollideWorldBounds(true);
    this.physics.add.collider(this.bigEnemy, midLayer);

    //Creates group of enemies
    this.enemies = this.add.group();
    //Spawn enemies until i > 20
    for (let i = 0; i < 30; i++) {
      const e = new Enemy(this, 700 + 20 * i, 680, "enemyTwoSheet", 1, 50, 1); //Will spawn enemy starting at 200 and then 20 * i +200 after that
      e.body.setCollideWorldBounds(true);
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
      this.bigEnemy,
      this.handleBeingCollision,
      null,
      this
    ); // When the hero collides with the Big Enemy call handleBeingCollision method;

    //Black Hole Logic
    this.keys = this.input.keyboard.addKeys({
      space: "SPACE",
    });

    this.projectiles = new Projectiles(this); //Creates Black Holes
    //For each entry in this.projectiles.children.entires set entry.dmg to 10. Sets damage for black holes.
    this.projectiles.children.entries.forEach((entry) => {
      entry.dmg = this.hero.dmg;
      entry.setCollideWorldBounds(true);
      entry.body.onWorldBounds = true;
      entry.body.world.on("worldbounds", (body) => {
        if (body.gameObject === entry) {
          entry.setActive(false);
          entry.setVisible(false);
        }
      });
    });

    this.physics.add.collider(
      this.projectiles,
      midLayer,
      this.handleProjectileWorldCollision,
      null,
      this
    );

    this.physics.add.overlap(
      this.projectiles,
      this.enemies,
      this.handleProjectileEnemyCollision,
      null,
      this
    );

    this.physics.add.overlap(
      this.projectiles,
      this.bigEnemy,
      this.handleProjectileEnemyCollision,
      null,
      this
    );
  } //create;

  handleProjectileWorldCollision(projectile) {
    if (projectile.gameObject === this) {
      this.setActive(false);
      this.setVisible(false);
    }
  } // handleProjectileWorldCollision

  handleProjectileEnemyCollision(enemy, projectile) {
    if (projectile.active) {
      enemy.hp -= projectile.dmg;
      enemy.setTint(0x000000);
      this.time.addEvent({
        delay: 300,
        callback: () => {
          enemy.clearTint();
        },
        callbackScope: this,
        loop: false,
      });
      if (enemy.hp <= 0) {
        enemy.setTint(0x000000);
        this.hero.points += enemy.worth;
        EventsCenter.emit("playerScored", this.hero.points);

        this.time.addEvent({
          delay: 350,
          callback: () => {
            enemy.killed();
            projectile.recycle();
          },
          callbackScope: this,
          loop: false,
        });
      }
      projectile.recycle();
    }
    if (this.hero.points >= 10) {
      this.cameras.main.fade(300, 100, 0, 0);
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("winScene");
        this.scene.sleep("UiScene");
      });
    }
  } //handleProjectileEnemyCollision

  handleBeingCollision(hero, enemy) {
    hero.hp -= enemy.dmg;
    hero.setTint(0xf00000);
    enemy.killed();
    this.cameras.main.shake(40, 0.02);
    //Time event built into phaser3 for 300 milliseconds the players tint will go red when overlapped by enemy from enemies group
    EventsCenter.emit("playerDamaged", this.hero.hp);
    this.time.addEvent({
      delay: 300,
      callback: () => {
        hero.clearTint();
      },
      callbackScope: this,
      loop: false,
    });
    if (hero.hp <= 0) {
      this.cameras.main.fade(300, 100, 0, 0);
      this.cameras.main.once("camerafadeoutcomplete", () => {
        this.scene.start("gameOverScene");
        this.scene.sleep("UiScene");
      });
    }
  } //handleBeingCollision

  //Time: returns the value in milliseconds from the time program started running.
  //Delta: returns the value from the last update cycle to the current update cycle.
  update(time, delta) {
    if (this.keys.space.isDown) {
      if (time > this.lastCastTime) {
        this.lastCastTime = time + 500; //Will not let you fire again for 500 milliseconds
        this.projectiles.castProjectile(
          this.hero.x,
          this.hero.y,
          this.hero.facing
        );
      }
    }
    this.hero.update();
    //If the enemy is not dead call update on enemy
    if (!this.bigEnemy.isDead) {
      this.bigEnemy.update();
    }

    //iterates over the children in the enemies group and calls their update function
    this.enemies.children.iterate((child) => {
      if (!child.isDead) {
        child.update(); //Calls update function for each child of enemies.
      }
    });

    this.projectiles.children.iterate((child) => {
      if (child.active) {
        child.update();
      }
    });
  } //Update
} //Class

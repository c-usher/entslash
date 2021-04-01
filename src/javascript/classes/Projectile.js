export class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "blackHole");
    this.x = 200;
    this.y = 200;
  }
  cast(x, y, dir) {
    this.body.reset(x, y);
    // this.body.setCollideWorldBounds(true);
    this.setActive(true);
    this.setVisible(true);
    this.dir = dir;
    switch (dir) {
      case "up":
        this.setVelocity(0, -200);

        break;
      case "down":
        this.setVelocity(0, 200);

        break;
      case "left":
        this.setVelocity(-200, 0);

        break;
      case "right":
        this.setVelocity(200, 0);

        break;
    }
    // this.body.onWorldBounds = true;
    // this.body.world.on(
    //   "worldbounds",
    //   (body) => {
    //     this.setActive(false);
    //     this.setVisible(false);
    //   },
    //   this.body
    // );
  }
  recycle() {
    this.setActive(false);
    this.setVisible(false);
  }
}

export class Projectiles extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      frameQuantity: 10,
      key: "blackHole",
      collideWorldBounds: true,
      active: false,
      visible: false,

      classType: Projectile,
    });
  }
  castProjectile(x, y, facing) {
    let projectile = this.getFirstDead(false);
    if (projectile) {
      projectile.cast(x, y, facing);
    }
  }
}

export class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "blackHole", null);
    this.x = 200;
    this.y = 200;
  } //Constructor

  update() {
    const blocked = this.body.blocked;
    if (blocked.up || blocked.down || blocked.left || blocked.right) {
      this.recycle();
    }
  }
  cast(x, y, dir) {
    this.body.reset(x, y);
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
    } //Switch
  } //cast
  recycle() {
    this.setActive(false);
    this.setVisible(false);
  } //Recycle
} //Class

export default class Projectiles extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.createMultiple({
      frameQuantity: 1000,
      key: "blackHole",
      collideWorldBounds: true,
      active: false,
      visible: false,

      classType: Projectile,
    });
  } //Constructor
  castProjectile(x, y, facing) {
    let projectile = this.getFirstDead(false);
    if (projectile) {
      projectile.cast(x, y, facing);
    }
  } //castProjectile
} //Class

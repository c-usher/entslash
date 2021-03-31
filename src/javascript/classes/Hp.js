export default class Hp {
  constructor(scene, x, y, hp) {
    this.scene = scene;
    this.currentHp = hp;
    this.x = x;
    this.y = y;

    this.graphics = this.scene.add.graphics();
    this.newGraphics = this.scene.add.graphics();
    const hpBackground = new Phaser.Geom.Rectangle(x, y, 104, 12);
    const hpFill = new Phaser.Geom.Rectangle(x, y, this.currentHp, 8);

    this.graphics.fillStyle(0xff0000, 0);
    this.graphics.fillRectShape(hpBackground);
    this.newGraphics.fillStyle(0xff0000, 1);
    this.newGraphics.fillRectShape(hpFill);

    this.scene.add.text(x, y, "HP", { fontSize: "10px", fill: "#fff" });
  } //Constructor

  takeDamage(hp) {
    this.newGraphics.clear();
    this.currentHp = hp;
    this.newGraphics.fillStyle(0xff0000, 1);

    const hpFill = new Phaser.Geom.Rectangle(this.x, this.y, this.currentHp, 8);
    this.newGraphics.fillRectShape(hpFill);
  }
}

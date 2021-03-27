import Being from "./Being";
export default class Enemy extends Being {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, "Enemy");

    const animsFrameRate = 8;
    const anims = scene.anims;
    this.textureKey = textureKey;

    anims.create({
      key: "enemy-up",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_up/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-down",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_down/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-left",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_left/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-right",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_right/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2, //how digits to add to the end of the prefix 2 = 00
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });
    this.anims.play("enemy-right");
  } //Constructor

  update() {}
} //Class

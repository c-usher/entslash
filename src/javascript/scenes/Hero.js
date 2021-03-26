import Being from "./Being.js";
export default class Hero extends Being {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, "Hero");

    const animsFrameRate = 8;
    const anims = scene.anims;

    anims.create({
      key: "hero_up",
      frames: anims.generateFrameNumbers(this.textureKey, { start: 0, end: 2 }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "hero_down",
      frames: anims.generateFrameNumbers(this.textureKey, { start: 3, end: 5 }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "hero_left",
      frames: anims.generateFrameNumbers(this.textureKey, { start: 6, end: 8 }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "hero_right",
      frames: anims.generateFrameNumbers(this.textureKey, {
        start: 9,
        end: 11,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });
    // this.setFrame(this.idleFrame.down)
    this.idleFrame = {
      up: 3,
      down: 6,
      left: 9,
      right: 12,
    };
    this.setFrame(this.idleFrame.down);
  }

  update() {}
}

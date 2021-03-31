import Being from "./Being.js";
export default class Hero extends Being {
  constructor(scene, x, y, textureKey, hp) {
    super(scene, x, y, textureKey, "Hero");

    this.hp = 10;
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

    this.idleFrame = {
      up: 2,
      down: 5,
      left: 8,
      right: 11,
    };
    this.setFrame(this.idleFrame.down);

    const {
      LEFT,
      RIGHT,
      UP,
      DOWN,
      W,
      A,
      S,
      D,
    } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
      w: W,
      a: A,
      s: S,
      d: D,
    });
  } //Constructor

  update() {
    const speed = 100;
    const previousVelocity = this.body.velocity.clone();

    this.body.setVelocity(0);

    if (this.keys.left.isDown || this.keys.a.isDown) {
      this.body.setVelocityX(-speed);
    } else if (this.keys.right.isDown || this.keys.d.isDown) {
      this.body.setVelocityX(speed);
    }

    if (this.keys.up.isDown || this.keys.w.isDown) {
      this.body.setVelocityY(-speed);
    } else if (this.keys.down.isDown || this.keys.s.isDown) {
      this.body.setVelocityY(speed);
    }

    this.body.velocity.normalize().scale(speed);

    ///Anims
    if (this.keys.up.isDown || this.keys.w.isDown) {
      this.anims.play("hero_up", true);
    } else if (this.keys.down.isDown || this.keys.s.isDown) {
      this.anims.play("hero_down", true);
    } else if (this.keys.left.isDown || this.keys.a.isDown) {
      this.anims.play("hero_left", true);
    } else if (this.keys.right.isDown || this.keys.d.isDown) {
      this.anims.play("hero_right", true);
    } else {
      this.anims.stop();
    }

    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
      if (previousVelocity.x < 0) {
        this.setFrame(this.idleFrame.left);
      } else if (previousVelocity.x > 0) {
        this.setFrame(this.idleFrame.right);
      } else if (previousVelocity.y < 0) {
        this.setFrame(this.idleFrame.up);
      } else if (previousVelocity.y > 0) {
        this.setFrame(this.idleFrame.down);
      }
    }
  }
}

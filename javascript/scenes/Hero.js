export default class Hero extends Phaser.Scene {
  constructor() {
    super("hero");
  }

  preload() {
    this.load.atlas(
      "hero",
      "/assets/sprites/hero_sprite.png",
      "/assets/json/hero_sprite.json"
    );
  }

  create() {
    const camera = this.cameras.main;

    const cursors = this.input.keyboard.createCursorKeys();
    controls = new Phaser.Cameras.Controls.FixedKeyControl({
      camera: camera,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 10
    });

    this.add
    .text(16, 16, "Arrow keys to scroll", {
      font: "18px monospace",
      fill: "#ffffff",
      padding: { x: 20, y: 10 },
      backgroundColor: "#000000"
    })
    .setScrollFactor(0);
  
    // Constrain the camera so that it isn't allowed to move outside the width/height of tilemap
    // camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    // const hero = this.physics.add.sprite(
    //   128,
    //   128,
    //   "hero",
    //   "hero_forward_idle.png"
    // );
    // this.cameras.main.startFollow(hero, true, 0.8, 0.8);
  }
  update( delta) {
    controls.update(delta);
  }
}

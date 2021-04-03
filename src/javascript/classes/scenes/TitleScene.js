export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
    this.load.image("titleBg", "/src/assets/titleScene.png");
  } //preload
  create() {
    const titleBG = this.add
      .image(0, 0, "titleBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const gameText = this.add.text(100, 100, "Welcome to my game!");
    gameText.setInteractive({ useHandCursor: true });
    gameText.on("pointerdown", () => this.clickButton());
  } //create
  clickButton() {
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("WorldScene");
    });
  } //click button
} // Class

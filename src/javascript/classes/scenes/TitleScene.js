export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
  } //preload
  create() {
    const gameText = this.add.text(100, 100, "Welcome to my game!");
    gameText.setInteractive({ useHandCursor: true });
    gameText.on("pointerdown", () => this.clickButton());
  } //create
  clickButton() {
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.switch("WorldScene");
    });
  } //click button
} // Class

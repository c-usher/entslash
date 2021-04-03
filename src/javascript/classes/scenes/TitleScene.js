export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
  }
  create() {
    const gameText = this.add.text(100, 100, "Welcome to my game!");
    gameText.setInteractive({ useHandCursor: true });
    gameText.on("pointerdown", () => this.clickButton());
  }
  clickButton() {
    this.scene.switch("WorldScene");
  }
} // Class

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("gameOverScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xffffff);
  } //Preload
  create() {
    const gameOverText = this.add.text(100, 100, "Game Over!");
    gameOverText.setInteractive({ useHandCursor: true });
    gameOverText.on("pointerdown", () => this.clickButton());
  }
  clickButton() {
    this.scene.switch("TitleScene");
  }
}

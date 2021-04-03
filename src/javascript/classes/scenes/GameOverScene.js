export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("gameOverScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
  } //Preload
  create() {
    const gameOverText = this.add.text(100, 100, "Game Over!");
    gameOverText.setInteractive({ useHandCursor: true });
    gameOverText.on("pointerdown", () => this.clickButton());
  }
  clickButton() {
    // const getWorldScene = this.scene.get("WorldScene");
    // getWorldScene.scene.restart();
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("titleScene");
    });
  }
}

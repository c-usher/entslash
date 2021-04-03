export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("gameOverScene");
  } // Constructor
  create() {
    const gameOverBg = this.add
      .image(0, 0, "gameOverBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const gameOverLogo = this.add
      .image(100, -100, "gameOverLogo")
      .setOrigin(0)
      .setDisplaySize(1200, 1000);

    const restartButton = this.add
      .image(200, 150, "restartButton")
      .setOrigin(0)
      .setDisplaySize(800, 600);

    const exitButton = this.add
      .image(175, 240, "exitButton")
      .setOrigin(0)
      .setDisplaySize(800, 600);

    restartButton.setInteractive({ useHandCursor: true });
    restartButton.on("pointerdown", () => this.clickButton());
  } //Create
  clickButton() {
    // const getWorldScene = this.scene.get("WorldScene");
    // getWorldScene.scene.restart();
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("titleScene");
    });
  } //clickButton
} //Class

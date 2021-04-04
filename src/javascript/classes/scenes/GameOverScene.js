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
      .image(330, 100, "gameOverLogo")
      .setOrigin(0)
      .setScale(1);

    const restartButton = this.add
      .image(473, 250, "restartButton")
      .setOrigin(0)
      .setScale(0.5);

    const exitButton = this.add.image(473, 300, "exitButton").setOrigin(0);
    exitButton.setScale(0.5);

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

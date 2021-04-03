export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("gameOverScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
    this.load.image("gameOverLogo", "/src/assets/you_died_logo.png");
    this.load.image("gameOverBg", "/src/assets/game_over_scene.png");
    this.load.image("restartButton", "/src/assets/restart.png");
  } //Preload
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

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor

  create() {
    const titleBG = this.add
      .image(0, 0, "titleBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const gameLogo = this.add
      .image(100, -100, "gameLogo")
      .setOrigin(0)
      .setDisplaySize(1200, 1000);

    const playButton = this.add
      .image(100, 150, "playButton")
      .setOrigin(0)
      .setDisplaySize(800, 600);

    const exitButton = this.add
      .image(97, 250, "exitButton")
      .setOrigin(0)
      .setDisplaySize(800, 600);

    playButton.setInteractive({ useHandCursor: true });
    playButton.on("pointerdown", () => this.clickButton());
  } //create
  clickButton() {
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("WorldScene");
    });
  } //click button
} // Class

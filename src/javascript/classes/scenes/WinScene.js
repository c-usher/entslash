export default class WinScene extends Phaser.Scene {
  constructor() {
    super("winScene");
  } //Constructor
  create() {
    const winBg = this.add
      .image(0, 0, "titleBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const winLogo = this.add
      .image(200, 100, "winLogo")
      .setOrigin(0)
      .setScale(1);

    const restartButton = this.add
      .image(473, 250, "restartButton")
      .setOrigin(0)
      .setScale(0.5);

    const exitButton = this.add
      .image(473, 300, "exitButton")
      .setOrigin(0)
      .setScale(0.5);

    restartButton.setInteractive({ useHandCursor: true });
    exitButton.setInteractive({ useHandCursor: true });
    restartButton.on("pointerdown", () => this.clickButton());

    let selectorSprite = this.add
      .sprite(100, 100, "heroSheet")
      .setVisible(false);

    this.anims.create({
      key: "selectorWalk",
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers("heroSheet", {
        start: 3,
        end: 5,
      }),
    });

    restartButton.on("pointerover", () => {
      selectorSprite.setVisible(true);
      selectorSprite.play("selectorWalk");
      selectorSprite.x = restartButton.x - 20;
      selectorSprite.y = restartButton.y + 20;
    });

    restartButton.on("pointerout", () => {
      selectorSprite.setVisible(false);
    });

    exitButton.on("pointerover", () => {
      selectorSprite.setVisible(true);
      selectorSprite.play("selectorWalk");
      selectorSprite.x = exitButton.x - 20;
      selectorSprite.y = exitButton.y + 20;
    });

    exitButton.on("pointerout", () => {
      selectorSprite.setVisible(false);
    });
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

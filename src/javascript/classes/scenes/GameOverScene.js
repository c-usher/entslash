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

    const exitButton = this.add
      .image(473, 300, "exitButton")
      .setOrigin(0)
      .setScale(0.5);

    let selectorSprite = this.add.sprite(100, 100, "heroSheet");
    selectorSprite.setVisible(false);
    this.anims.create({
      key: "selectorWalk",
      frameRate: 8,
      repeat: -1,
      frames: this.anims.generateFrameNumbers("heroSheet", {
        start: 3,
        end: 5,
      }),
    });

    restartButton.setInteractive({ useHandCursor: true });
    restartButton.on("pointerdown", () => this.clickButton());

    exitButton.setInteractive({ useHandCursor: true });

    //When the Player hovers over the playButton choicesSprite will be set to visible. It will show up to the left of the button.
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

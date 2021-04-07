export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor

  create() {
    const titleBg = this.add
      .image(0, 0, "titleBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const gameLogo = this.add
      .image(200, 100, "gameLogo")
      .setOrigin(0)
      .setScale(1);

    const playButton = this.add
      .image(370, 240, "playButton")
      .setOrigin(0)
      .setScale(0.5);

    const exitButton = this.add
      .image(373, 300, "exitButton")
      .setOrigin(0)
      .setScale(0.5);

    playButton.setInteractive({ useHandCursor: true });
    playButton.on("pointerdown", () => this.clickPlayButton());

    exitButton.setInteractive({ useHandCursor: true });
    exitButton.on("pointerdown", () => {
      this.clickExitButton();
    });

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

    //When the Player hovers over the playButton choicesSprite will be set to visible. It will show up to the left of the button.
    playButton.on("pointerover", () => {
      selectorSprite.setVisible(true);
      selectorSprite.play("selectorWalk");
      selectorSprite.x = playButton.x - 20;
      selectorSprite.y = playButton.y + 20;
    });

    playButton.on("pointerout", () => {
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
  } //create
  clickPlayButton() {
    this.cameras.main.fade(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("WorldScene");
    });
  } //clickPlayButton
  clickExitButton() {
    this.cameras.main.fade(300, 0, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.game.destroy();
    });
  } //clickExitButton
} // Class

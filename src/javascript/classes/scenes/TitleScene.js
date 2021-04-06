import Hero from "../Hero";
export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor

  create() {
    const titleBG = this.add
      .image(0, 0, "titleBg")
      .setOrigin(0)
      .setDisplaySize(1280, 720);

    const gameLogo = this.add.image(200, 100, "gameLogo").setOrigin(0);
    gameLogo.setScale(1);

    const playButton = this.add.image(370, 240, "playButton").setOrigin(0);
    playButton.setScale(0.5);

    const exitButton = this.add.image(373, 300, "exitButton").setOrigin(0);
    exitButton.setScale(0.5);

    playButton.setInteractive({ useHandCursor: true });
    playButton.on("pointerdown", () => this.clickButton());

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
  } //create
  clickButton() {
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("WorldScene");
    });
  } //click button
} // Class

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

    const choiceSprite = this.add.spriteSheet(100, 100, "heroSheet");
    choiceSprite.setScale(1).setVisible(false);
    choiceSprite.anims.play("hero_right");

    playButton.setInteractive({ useHandCursor: true });
    playButton.on("pointerdown", () => this.clickButton());

    //When the Player hovers over the playButton choicesSprite will be set to visible. It will show up to the left of the button.
    playButton.on("pointerover", () => {
      choiceSprite.setVisible(true);
      this.anims.play("hero_right");
      choiceSprite.x = playButton.x - 1;
      choiceSprite.y = playButton.y;
    });

    playButton.on("pointerout", () => {
      choiceSprite.setVisible(false);
    });
  } //create
  clickButton() {
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once("camerafadeoutcomplete", () => {
      this.scene.start("WorldScene");
    });
  } //click button
} // Class

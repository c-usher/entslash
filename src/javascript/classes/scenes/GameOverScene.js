import TitleScene from "./TitleScene";
import UiScene from "./UiScene";
import WorldScene from "./WorldScene";

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
    this.cameras.main.fade(300, 100, 0, 0);
    this.cameras.main.once(
      "camerafadeoutcomplete",
      () => {
        this.game.destroy();
        this.titleScene = new TitleScene();
        this.titleScene.create();
        this.titleScene.preload();

        this.scene.start("TitleScene");
      },
      this
    );
  }
}

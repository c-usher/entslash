export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("titleScene");
  } // Constructor
  preload() {
    this.cameras.main.setBackgroundColor(0xff00ff);
  }
  create() {}
} // Class

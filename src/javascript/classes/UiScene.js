import Phaser from "phaser";
export default class UiScene extends Phaser.Scene {
  constructor() {
    super("UiScene");
  }

  create() {
    const hpBottles = this.add.group({
      classType: Phaser.GameObjects.Image,
    });

    hpBottles.createMultiple({
      key: "fullBottle",
      setXY: {
        x: 10,
        y: 10,
        stepX: 16,
      },
      quantity: 3,
    });
  }
}

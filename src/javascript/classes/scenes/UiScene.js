import Phaser from "phaser";
import EventsCenter from "../../events/EventsCenter";
export default class UiScene extends Phaser.Scene {
  hpBottles = Phaser.GameObjects.Group;
  constructor() {
    super("UiScene");
  }

  create() {
    this.hpBottles = this.add.group({
      classType: Phaser.GameObjects.Image,
    });

    this.hpBottles.createMultiple({
      key: "fullBottle",
      setXY: {
        x: 10,
        y: 700,
        stepX: 25,
      },
      quantity: 10,
    });
    EventsCenter.on("playerDamaged", this.handleHpChange, this);
  }

  handleHpChange(hp) {
    this.hpBottles.children.each((object, index) => {
      const hpBottles = object;
      if (index < hp) {
        hpBottles.setTexture("fullBottle");
      } else {
        hpBottles.setTexture("emptyBottle");
      }
    });
  }
}

import Phaser from "phaser";
import EventsCenter from "../../events/EventsCenter";
export default class UiScene extends Phaser.Scene {
  hpBottles = Phaser.GameObjects.Group;
  constructor() {
    super("UiScene");
  } //Constructor

  create() {
    this.hpBottles = this.add.group({
      classType: Phaser.GameObjects.Image,
    });

    this.hpBottles.createMultiple({
      key: "fullBottle",
      setXY: {
        x: 10,
        y: 20,
        stepX: 25,
      },
      quantity: 10,
    });

    this.scoreTrackers = this.add.group({
      classType: Phaser.GameObjects.Image,
    });

    this.scoreTrackers.createMultiple({
      key: "emptyTracker",
      setXY: {
        x: 10,
        y: 55,
        stepX: 25,
      },
      quantity: 10,
    });
    EventsCenter.on("playerDamaged", this.handleHpChange, this);
    EventsCenter.on("playerScored", this.handleScoreChange, this);
  } //Create

  handleHpChange(hp) {
    this.hpBottles.children.each((object, index) => {
      const hpBottles = object;
      if (index < hp) {
        hpBottles.setTexture("fullBottle");
      } else {
        hpBottles.setTexture("emptyBottle");
      }
    });
  } //handleHpChange

  handleScoreChange(score) {
    this.scoreTrackers.children.each((object, index) => {
      const scoreTrackers = object;
      if (index < score) {
        scoreTrackers.setTexture("fullTracker");
      } else {
        scoreTrackers.setTexture("emptyTracker");
      }
    });
  }
} //Class

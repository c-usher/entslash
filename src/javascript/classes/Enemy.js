import Being from "./Being";
export default class Enemy extends Being {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, "Enemy");

    const animsFrameRate = 8;
    const anims = scene.anims;
    this.textureKey = textureKey;

    anims.create({
      key: "enemy-up",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_up/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-down",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_down/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-left",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_left/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2,
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    anims.create({
      key: "enemy-right",
      frames: anims.generateFrameNames(this.textureKey, {
        prefix: "enemy_two_right/",
        suffix: "",
        start: 1,
        end: 3,
        zeroPad: 2, //how digits to add to the end of the prefix 2 = 00
      }),
      frameRate: animsFrameRate,
      repeat: -1,
    });

    this.speed = 100;
    let randir = Math.floor(Math.random() * 4);
    //Switch Case: Perform an action dependant on a condition. randir = 2 run case 2
    switch (randir) {
      case 0:
        this.body.setVelocity(0, -this.speed);
        this.anims.play("enemy-up"); //Up
        break;
      case 1:
        this.body.setVelocity(0, this.speed);
        this.anims.play("enemy-down"); //Down
        break;
      case 2:
        this.body.setVelocity(-this.speed, 0);
        this.anims.play("enemy-left"); //Left
        break;
      case 3:
        this.body.setVelocity(this.speed, 0);
        this.anims.play("enemy-right"); //Right
        break;
    }
  } //Constructor

  update() {
    const { speed } = this; // Destructuring
    const enemyBlocked = this.body.blocked;
    if (
      enemyBlocked.up ||
      enemyBlocked.down ||
      enemyBlocked.left ||
      enemyBlocked.right
    ) {
      let possibleDirections = [];
      //For each direction push into possibleDirections array)
      for (const direction in enemyBlocked) {
        possibleDirections.push(direction);
      }
      possibleDirections.shift(); //Removes the "none:" from the array

      const newDirection = possibleDirections[Math.floor(Math.random() * 4)];

      // Changes direction when the sprite comes in contact with wall
      switch (newDirection) {
        case "up":
          this.body.setVelocity(0, -this.speed);
          this.anims.play("enemy-up"); //Up
          break;
        case "down":
          this.body.setVelocity(0, this.speed);
          this.anims.play("enemy-down"); //Down
          break;
        case "left":
          this.body.setVelocity(-this.speed, 0);
          this.anims.play("enemy-left"); //Left
          break;
        case "right":
          this.body.setVelocity(this.speed, 0);
          this.anims.play("enemy-right"); //Right
          break;
      }
    }
  }
} //Class

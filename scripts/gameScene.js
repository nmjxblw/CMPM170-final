class GameScene extends Phaser.Scene {
  constant = 100;
  constructor() {
    super({ key: "GameScene" });
  }
  preload() {
    this.load.image("photo", "assets/photo.jpg");
    this.load.image("manfacecat", "assets/2278-manfacecat.png");
    this.load.image("harold", "assets/6290-harold.png");
    this.load.image("cat", "assets/8345-cat.png");
  }
  create() {
    this.cameras.main.setBackgroundColor("#000");
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    this.lights.enable().setAmbientColor(0x010101);

    this.photoImage = this.add
      .image(0, 0, "photo")
      .setOrigin(0)
      .setDepth(-1)
      .setPipeline("Light2D");

    const light = this.lights
      .addLight(180, 80, 200)
      .setColor(0xffffff)
      .setIntensity(2);

    //  Track the pointer
    this.input.on("pointermove", (pointer) => {
      light.x = pointer.x;
      light.y = pointer.y;
    });

    let hitText = this.add
      .text(
        300,
        50,
        "Tip: Using mouse to move the light \nand Clikc to collect all Easter Egg!"
      )
      .setOrigin(0.5)
      .setFontFamily("Gabriola")
      .setFontSize(40)
      .setDepth(0)
      .setColor("#e7b5dd");

    let easterEggs = ["manfacecat", "harold", "cat"];
    let playerFound = [];
    const handleEggs = (interactiveObject) => {
      playerFound.push(interactiveObject);

      // Check if the interactiveObject has a corresponding Phaser GameObject
      interactiveObject.destroy();
      console.log(playerFound);
      if (playerFound.length === easterEggs.length) {
        this.cameras.main.fadeOut(1000, 0, 0, 0);
        this.time.delayedCall(
          1000,
          () => {
            this.scene.start("Credit");
          },
          [],
          this
        );
      }
    };
    easterEggs.forEach((memeString) => {
      this[memeString] = this.add
        .image(
          Phaser.Math.Between(100, this.game.config.width - 100),
          Phaser.Math.Between(100, this.game.config.height - 100),
          memeString
        )
        .setDepth(0)
        .setScale(0.5)
        .setOrigin(0)
        .setPipeline("Light2D")
        .setInteractive()
        .on("pointerup", () => handleEggs(this[memeString]));
    });
  }
}

class GameScene extends Phaser.Scene {
  constant = 100;
  preload() {
    this.load.image("photo", "assets/photo.png");
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

    let hitText1 = this.add
      .text(
        300,
        50,
        "Tip: Using mouse to move the light \nand find all Easter Egg!"
      )
      .setOrigin(0.5)
      .setFontFamily("Gabriola")
      .setFontSize(40)
      .setDepth(0)
      .setColor("#e7b5dd");
  }
}

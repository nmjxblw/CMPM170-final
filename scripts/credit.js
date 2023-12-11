class Credit extends Phaser.Scene {
  constructor() {
    super({ key: "Credit" });
  }
  create() {
    this.cameras.main.setBackgroundColor("#000");
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.cameras.main.setBackgroundColor("#f0f0f0");

    this.thanksText = this.add
      .text(
        this.game.config.width / 2,
        this.game.config.height / 2 - 400,
        "Thanks for playing!"
      )
      .setOrigin(0.5)
      .setFontFamily("Gabriola")
      .setFontSize(80)
      .setDepth(0)
      .setColor("#000");

      this.creditText = this.add
      .text(
        this.game.config.width / 2 ,
        this.game.config.height / 2 ,
`Credit
    Background:
        Name: Autumn
        Author: Bison倉鼠 
        Link: https://www.freepik.com/free-photos-vectors/background
    
    Easter Egg:
        Name: 2278-manfacecat
        Name: 6290-harold
        Name: 8345-cat
        Link: https://emoji.gg/category/3/meme&sort=recent&page=1

    Phaser Reference:
        Linke: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/lights/spotlight.js
        `
      )
      .setOrigin(0.5)
      .setFontFamily("Gabriola")
      .setFontSize(50)
      .setDepth(0)
      .setColor("#000");
  }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [
        GameScene,
        Credit
    ],
    backgroundColor: 0x000000,
    title: "Game",
});


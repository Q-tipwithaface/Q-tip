import MainScene from "./MainScene.js";

const config = {
    width: 800,
    height: 600,
    backgroundColor: '#FFCC66',
    type: Phaser.AUTO,
    scene: [MainScene],
    physics: {
        default: 'arcade',
        matter: {
            debug: true,
            gravity: {y: 0}
        }
    }
}

new Phaser.Game(config)
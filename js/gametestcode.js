export default class MainScene extends Phaser.Scene {
  constructor() {
      super('MainScene');
  }

  preload() {
      console.log('preload')
      this.load.spritesheet('player', '../assets/player.png', { frameWidth: 32, frameHeight: 64 });
      this.load.setBaseURL('http://127.0.0.1:5500/');
  }
  create() {
      console.log('create')
      this.player = this.add.image(400,300, 'player')
      this.player.setScale(2);
      this.inputKeys = this.input.keyboard.addKeys({
          up: Phaser.Input.Keyboard.KeyCodes.W,
          down: Phaser.Input.Keyboard.KeyCodes.S,
          left: Phaser.Input.Keyboard.KeyCodes.A,
          right: Phaser.Input.Keyboard.KeyCodes.D
      });
      
  }
  update() {

      console.log('update')
      const speed = 2.5;
      let playerVelocity = new Phaser.Math.Vector2();
      if (this.inputKeys.left.isDown) {
          playerVelocity.x = -1;
      } else if (this.inputKeys.right.isDown) {
          playerVelocity.x = 1;
      } 
      if (this.inputKeys.up.isDown) {
          playerVelocity.y = -1;
      } else if (this.inputKeys.down.isDown) {
          playerVelocity.y = 1;
      }
      playerVelocity.normalize().scale(speed);
      this.player.x += playerVelocity.x;
      this.player.y += playerVelocity.y;
      
  }
}
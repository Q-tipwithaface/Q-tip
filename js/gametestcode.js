const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
  });
  
  function preload() {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('player', 'assets/player.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }
  
  function create() {
    this.add.image(0, 0, 'background').setOrigin(0, 0);
    this.player = this.add.sprite(100, 200, 'player');
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
    
    // Add a button to start audio
    const button = document.createElement('button');
    button.textContent = 'Start';
    document.body.appendChild(button);
    button.addEventListener('click', () => {
      // Start audio context on user input
      game.sound.context.resume();
    });
  
    this.player.play('idle');
  }
  
  function update() {
    // Game logic
  }
  



// // Create a Phaser game using the specified format
// const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
//     preload: preload,
//     create: create,
//     update: update
//   });
  
//   // Preload assets
//   function preload() {
//     // Load the background image
//     this.load.image('background', '../assets/background.png');
    
//     // Load the player character sprite
//     this.load.spritesheet('player', '../assets/player.png', {
//       frameWidth: 32,
//       frameHeight: 48
//     });
//   }
  
//   // Create the game
//   function create() {
//     // Add the background image
//     this.add.image(0, 0, 'background').setOrigin(0, 0);
    
//     // Add the player character sprite
//     this.player = this.add.sprite(100, 200, 'player');
    
//     // Create animations for the player sprite
//     this.anims.create({
//       key: 'idle',
//       frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
//       frameRate: 8,
//       repeat: -1
//     });
    
//     // Play the idle animation
//     this.player.play('idle');
//   }
  
//   // Update the game
//   function update() {
//     // Add game logic here
//   }
  
import {CONSTANTS} from '../CONSTANTS'

export class GameScene extends Phaser.Scene {
  constructor(){
    super({
      key: CONSTANTS.SCENES.GAME
    })
  }
  // init(data){
  //   console.log(data)
  //   console.log("pooper")
  // }
  preload(){
    this.load.image('crosshair', '../assets/crosshair.png')
  }
  create(){
    // this.startGameText = this.add
    // .text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, ['TEST'])
    // .setDepth(11)
    // .setFontSize(20)
    // .setColor('#00ff22')
    // .setInteractive()

    this.crosshair = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height /2,'crosshair').setScale(.2)

     // Pointer lock will only work after an 'engagement gesture', e.g. mousedown, keypress, etc.
     this.input.on('pointerdown', function (pointer) {

      this.input.mouse.requestPointerLock();

  }, this);

  // When locked, you will have to use the movementX and movementY properties of the pointer
  // (since a locked cursor's xy position does not update)
  this.input.on('pointermove', function (pointer) {

      if (this.input.mouse.locked)
      {
          this.crosshair.x += pointer.movementX;
          this.crosshair.y += pointer.movementY;


          // Force the sprite to stay on screen
          // this.crosshair.x = Phaser.Math.Wrap(this.crosshair.x, 0, this.game.renderer.width);
          // this.crosshair.y = Phaser.Math.Wrap(this.crosshair.y, 0, this.game.renderer.height);

          // if (pointer.movementX > 0) { this.crosshair.setRotation(0.1); }
          // else if (pointer.movementX < 0) { this.crosshair.setRotation(-0.1); }
          // else { this.crosshair.setRotation(0); }

          // updateLockText(true);
      }
  }, this);

  // Exit pointer lock when Q is pressed. Browsers will also exit pointer lock when escape is
  // pressed.
  this.input.keyboard.on('keydown-Q', function (event) {
      if (this.input.mouse.locked)
      {
          this.input.mouse.releasePointerLock();
      }
  }, this);

  }
}
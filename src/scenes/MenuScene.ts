// @ts-ignore
import {CONSTANTS} from '../CONSTANTS'

export class MenuScene extends Phaser.Scene {
  constructor(){
    super({
      key: CONSTANTS.SCENES.MENU
    })
  }
  // init(){
  // }
  // preload(){}
  create(){
    let startButton: Phaser.GameObjects.Text = this.add
    .text(this.game.renderer.width / 2, this.game.renderer.height /2, ['Play'])
    // .setDepth(11)
    .setFontSize(25)
    .setColor('#00ff22')
      .setInteractive()
    
    let crosshair = this.add.image(this.game.renderer.width/2 - 80, this.game.renderer.height/2 - 10, CONSTANTS.IMAGE.CROSSHAIR).setScale(.2).setOrigin(0).setVisible(false)

    startButton.on('pointerover', () => {
      crosshair.setVisible(true)
      crosshair.x = startButton.x - startButton.width
      crosshair.y = startButton.y - 10
    })
    
    startButton.on(
      'pointerup',
       () => {
        this.scene.start(CONSTANTS.SCENES.GAME);
      },
      this
    );

    let optionsText:Phaser.GameObjects.Text = this.add.text(this.game.renderer.width/2, this.game.renderer.height/2 + 100, ['Options']).setFontSize(25).setColor("#00ff22").setInteractive()

    optionsText.on('pointerup', function(){
      // load options scene here
      console.log('options clicked')
    })
    
  }
}
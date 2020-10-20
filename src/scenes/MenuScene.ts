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
    let startGameText: Phaser.GameObjects.Text = this.add
    .text(this.game.renderer.width / 2, this.game.renderer.height /2, ['Play'])
    // .setDepth(11)
    .setFontSize(25)
    .setColor('#00ff22')
    .setInteractive()
    
    startGameText.on(
      'pointerup',
       () => {
        this.scene.start(CONSTANTS.SCENES.GAME);
        // this.startGameText.destroy();
        // this.startGameText.visible = false;
      },
      this
    );

    this.optionsText = this.add.text(this.game.renderer.width/2, this.game.renderer.height/2 + 100, ['Options']).setFontSize(25).setColor("#00ff22").setInteractive()

    this.optionsText.on('pointerup', function(){
      // load options scene here
      console.log('options clicked')
    })
    
  }
}
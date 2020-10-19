import {CONSTANTS} from '../CONSTANTS'

export class MenuScene extends Phaser.Scene {
  constructor(){
    super({
      key: CONSTANTS.SCENES.MENU
    })
  }
  init(data){
    console.log(data)
    console.log("pooper")
  }
  preload(){}
  create(){
    this.startGameText = this.add
    .text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, ['Play'])
    .setDepth(11)
    .setFontSize(20)
    .setColor('#00ff22')
    .setInteractive()

    this.startGameText.on(
      'pointerup',
      function () {
        this.scene.start(CONSTANTS.SCENES.GAME);
        // this.startGameText.destroy();
        // this.startGameText.visible = false;
      },
      this
    );

  }
}
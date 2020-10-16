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
  create(){}
}
import {CONSTANTS} from '../CONSTANTS'
import { MenuScene } from './MenuScene'

export class LoadScene extends Phaser.Scene {
  constructor(){
    super({
      key: CONSTANTS.SCENES.LOAD
    })
  }
  preload(){}
  create(){
    // this.scene.add(CONSTANTS.SCENES.MENU, MenuScene, false) DYNAMIC SCENE
    

    this.scene.start(CONSTANTS.SCENES.MENU)
    // this.scene.launch() loads scene in parallel
  }
  // update() {
  // }
}
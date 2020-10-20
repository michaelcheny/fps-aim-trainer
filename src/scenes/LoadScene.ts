// @ts-ignore
import { CONSTANTS } from '../CONSTANTS'
import { MenuScene } from './MenuScene'

export class LoadScene extends Phaser.Scene {
  constructor(){
    super({
      key: CONSTANTS.SCENES.LOAD
    })
  }
  init() { }

  loadImages() {
    this.load.setPath('./assets/image')

    for (let prop in CONSTANTS.IMAGE) {
      this.load.image(CONSTANTS.IMAGE[prop], CONSTANTS.IMAGE[prop])
    }
  }

  loadAudio() {
    this.load.setPath('./assets/audio')

    for (let prop in CONSTANTS.AUDIO) {
      this.load.audio(CONSTANTS.AUDIO[prop], CONSTANTS.AUDIO[prop])
    }
  }
  
  loadSprites(frameConfig?: Phaser.Types.Loader.FileTypes.ImageFrameConfig) {
    this.load.setPath('./assets/sprite')

    for (let prop in CONSTANTS.SPRITE) {
      this.load.spritesheet(CONSTANTS.SPRITE[prop], CONSTANTS.SPRITE[prop], frameConfig)
    }
  }

  preload() {
    this.loadAudio()
    this.loadImages()
    this.loadSprites()
  }
  create(){
    // this.scene.add(CONSTANTS.SCENES.MENU, MenuScene, false) DYNAMIC SCENE
    

    this.scene.start(CONSTANTS.SCENES.MENU)
    // this.scene.launch() loads scene in parallel
  }
  // update() {
  // }
}
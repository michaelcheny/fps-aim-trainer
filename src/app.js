/** @type {import(../typings/phaser)} */

import {LoadScene} from './scenes/LoadScene'
import {MenuScene} from './scenes/MenuScene'
import {GameScene} from './scenes/GameScene'

let game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1400,
  height: 1000,
  scene: [LoadScene,MenuScene,GameScene]
})


// console.log('poop')
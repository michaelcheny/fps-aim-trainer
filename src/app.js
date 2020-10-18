/** @type {import(../typings/phaser)} */

import {LoadScene} from './scenes/LoadScene'
import {MenuScene} from './scenes/MenuScene'

let game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 1200,
  height: 1000,
  scene: [LoadScene,MenuScene]
})


// console.log('poop')
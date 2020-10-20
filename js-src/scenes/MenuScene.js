// @ts-ignore
import { CONSTANTS } from '../CONSTANTS';
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CONSTANTS.SCENES.MENU
        });
    }
    // init(){
    // }
    // preload(){}
    create() {
        let startButton = this.add
            .text(this.game.renderer.width / 2, this.game.renderer.height / 2, ['Play'])
            // .setDepth(11)
            .setFontSize(25)
            .setColor('#00ff22')
            .setInteractive();
        let crosshair = this.add.image(this.game.renderer.width / 2 - 80, this.game.renderer.height / 2 - 10, CONSTANTS.IMAGE.CROSSHAIR).setScale(.2).setOrigin(0).setVisible(false);
        startButton.on('pointerover', () => {
            crosshair.setVisible(true);
            crosshair.x = startButton.x - 69;
            crosshair.y = startButton.y - 10;
        });
        startButton.on('pointerout', () => {
            crosshair.setVisible(false);
        });
        startButton.on('pointerup', () => {
            this.scene.start(CONSTANTS.SCENES.GAME);
        });
        let optionsButton = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, ['Options']).setFontSize(25).setColor("#00ff22").setInteractive();
        optionsButton.on('pointerover', () => {
            crosshair.setVisible(true);
            crosshair.x = optionsButton.x - 69;
            crosshair.y = optionsButton.y - 10;
        });
        optionsButton.on('pointerout', () => {
            crosshair.setVisible(false);
        });
        optionsButton.on('pointerup', function () {
            // load options scene here
            console.log('options clicked');
        });
    }
}

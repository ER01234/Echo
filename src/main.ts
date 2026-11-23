import Phaser from 'phaser';
import { gameConfig } from './data/game-config';
import { GameScene } from './render/GameScene';

export const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: gameConfig.parent,
  backgroundColor: gameConfig.backgroundColor,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: gameConfig.width,
    height: gameConfig.height,
  },
  pixelArt: true,
  scene: [GameScene],
});

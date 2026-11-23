import Phaser from 'phaser';
import { gameConfig } from '../data/game-config';

const TITLE_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
  fontFamily: 'monospace',
  fontSize: '72px',
  color: '#7fe7ff',
};

const SUBTITLE_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
  fontFamily: 'monospace',
  fontSize: '20px',
  color: '#5c7080',
};

/**
 * Placeholder combat scene.
 *
 * Task 0.1 only proves the toolchain: the real arena, player and enemies arrive
 * in stage 1. Everything here is throwaway scaffolding.
 */
export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create(): void {
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor(gameConfig.backgroundColor);

    this.add
      .text(width / 2, height / 2 - 24, 'ECHO', TITLE_STYLE)
      .setOrigin(0.5)
      .setLetterSpacing(18);

    this.add
      .text(width / 2, height / 2 + 56, 'stage 0.1 - toolchain online', SUBTITLE_STYLE)
      .setOrigin(0.5);
  }
}

/**
 * Presentation-level settings for the Phaser canvas.
 *
 * Deliberately free of Phaser imports so plain Node tests and future tools can
 * read these values without pulling the engine in.
 */
export const gameConfig = {
  parent: 'game-root',
  width: 1280,
  height: 720,
  backgroundColor: '#0b0e14',
} as const;

export type GameConfig = typeof gameConfig;

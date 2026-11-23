import { describe, expect, it } from 'vitest';
import { gameConfig } from '../../src/data/game-config';

describe('gameConfig', () => {
  it('defines integer canvas dimensions', () => {
    expect(Number.isInteger(gameConfig.width)).toBe(true);
    expect(Number.isInteger(gameConfig.height)).toBe(true);
    expect(gameConfig.width).toBeGreaterThan(0);
    expect(gameConfig.height).toBeGreaterThan(0);
  });

  it('keeps a 16:9 canvas', () => {
    expect(gameConfig.width / gameConfig.height).toBeCloseTo(16 / 9, 5);
  });

  it('defines a valid hex background color', () => {
    expect(gameConfig.backgroundColor).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('mounts into the game-root element', () => {
    expect(gameConfig.parent).toBe('game-root');
  });
});

import { describe, expect, it } from 'vitest';
import * as icons from './index';

describe('Index exports', () => {
  it('exports Apple', () => {
    expect(icons.Apple).toBeDefined();
    expect(typeof icons.Apple).toBe('function');
  });

  it('exports CopyCheck', () => {
    expect(icons.CopyCheck).toBeDefined();
    expect(typeof icons.CopyCheck).toBe('function');
  });

  it('exports Github', () => {
    expect(icons.Github).toBeDefined();
    expect(typeof icons.Github).toBe('function');
  });

  it('exports Globe', () => {
    expect(icons.Globe).toBeDefined();
    expect(typeof icons.Globe).toBe('function');
  });

  it('exports Linux', () => {
    expect(icons.Linux).toBeDefined();
    expect(typeof icons.Linux).toBe('function');
  });

  it('exports Windows', () => {
    expect(icons.Windows).toBeDefined();
    expect(typeof icons.Windows).toBe('function');
  });

  it('exports Star', () => {
    expect(icons.Star).toBeDefined();
    expect(typeof icons.Star).toBe('function');
  });

  it('exports exactly 7 icons', () => {
    const exports = Object.keys(icons);
    expect(exports).toHaveLength(7);
    expect(exports.sort()).toEqual(
      ['Apple', 'CopyCheck', 'Github', 'Globe', 'Linux', 'Star', 'Windows'].sort()
    );
  });
});

import { calcTileType, calcHealthLevel } from '../utils';

test('Function calcTileType returns correct tile type', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
  expect(calcTileType(7, 8)).toBe('top-right');
  expect(calcTileType(56, 8)).toBe('bottom-left');
  expect(calcTileType(63, 8)).toBe('bottom-right');
  expect(calcTileType(16, 8)).toBe('left');
  expect(calcTileType(23, 8)).toBe('right');
  expect(calcTileType(57, 8)).toBe('bottom');
  expect(calcTileType(1, 8)).toBe('top');
  expect(calcTileType(55, 8)).toBe('right');
  expect(calcTileType(28, 8)).toBe('center');
});

test('Function calcHealthLevel returns correct health level', () => {
  expect(calcHealthLevel(10)).toBe('critical');
  expect(calcHealthLevel(30)).toBe('normal');
  expect(calcHealthLevel(100)).toBe('high');
});
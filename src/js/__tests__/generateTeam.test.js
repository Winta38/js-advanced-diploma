import Bowman from '../Characters/Bowman';
import Daemon from '../Characters/Daemon';
import Magician from '../Characters/Magician';
import Swordsman from '../Characters/Swordsman';
import Undead from '../Characters/Undead';
import Vampire from '../Characters/Vampire';
import Character from '../Character';
import { characterGenerator, generateTeam } from '../generators';

test('Throw error after create new Character class', () => {
  expect(() => {
    const result = new Character();
    return result;
  }).toThrow(Error);
});

test('Create correct parameters after create character', () => {
  expect(new Daemon(2)).toEqual({
    level: 2, type: 'daemon', attack: 10, defence: 10, health: 100, moveRange: 1, attackRange: 4,
  });
});

test.each([
  [Bowman, 'bowman'],
  [Bowman, 'bowman'],
  [Swordsman, 'swordsman'],
  [Swordsman, 'swordsman'],
  [Magician, 'magician'],
  [Magician, 'magician'],
  [Undead, 'undead'],
  [Undead, 'undead'],
  [Swordsman, 'swordsman'],
  [Swordsman, 'swordsman'],
  [Vampire, 'vampire'],
  [Vampire, 'vampire'],
])('Create new characters infinitely', (character, expected) => {
  const result = characterGenerator([character, character, character], 3).next().value;
  expect(result.type).toEqual(expected);
});

test('Function generateTeam correct return quantity of characters', () => {
  const result = generateTeam([Bowman, Swordsman, Magician], 3, 4);
  expect(result.length).toEqual(4);
});

test('Function generateTeam correct return max level of characters', () => {
  const result = generateTeam([Bowman, Bowman, Bowman], 3, 4);
  if (result[0].level >= 1 && result[0].level <= 3) {
    expect(result[0].type).toEqual('bowman');
  }
});
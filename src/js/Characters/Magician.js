import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super(level, 'magician');
    this.attack = 10;
    this.defence = 40;
    this.health = 100;
    this.moveRange = 1;
    this.attackRange = 4;
  }
}
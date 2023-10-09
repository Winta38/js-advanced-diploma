import Character from '../Character';

import Character from '../Character';

export default class Daemon extends Character {
  constructor(level) {
    super(level, 'daemon');
    this.attack = 10;
    this.defence = 10;
    this.health = 100;
    this.moveRange = 1;
    this.attackRange = 4;
  }
}
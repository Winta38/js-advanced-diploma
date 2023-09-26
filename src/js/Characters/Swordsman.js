import Character from '../Character.js';

export default class Swordsman extends Character {
    constructor(level) {
        super(level, 'swordsman');
        this.attack = 40;
        this.defence = 10;
        this.distance = 4;
        this.attackRange = 1;
    }
}
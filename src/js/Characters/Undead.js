import Character from '../Character.js';

export default class Undead extends Character {
    constructor(level) {
        super(level, 'undead');
        this.attack = 40;
        this.defence = 10;
        this.distance = 4;
        this.attackRange = 1;
    }
}
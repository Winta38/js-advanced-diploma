import Character from '../Character.js';

export default class Bowman extends Character {
    constructor(level) {
        super(level, 'bowman');
        this.attack = 25;
        this.defence = 25;
        this.distance = 2;
        this.attackRange = 2;
    }
}
//https://www.codewars.com/kata/5682e646d5eddc1e21000017/train/javascript

class Marine {
    constructor() { this.health = 100; }
    accept(visitor) { visitor.visitLight(this); }
}
class Marauder {
    constructor() { this.health = 125; }
    accept(visitor) { visitor.visitArmored(this); }
}
class TankBullet {
    visitLight(unit) { unit.health -= 21; }
    visitArmored(unit) { unit.health -= 32; }
}
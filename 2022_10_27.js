//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/solutions/javascript

function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}

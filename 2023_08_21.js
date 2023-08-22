//https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b

function strongEnough(earthquake, age) {
    earthquake = earthquake.reduce((s, v) => s * v.reduce((x, s) => x + s, 0), 1);
    var strength = 1000 * Math.pow(.99, age);
    return strength > earthquake ? 'Safe!' : 'Needs Reinforcement!';
}
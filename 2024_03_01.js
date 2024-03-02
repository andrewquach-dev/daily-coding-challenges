//https://www.codewars.com/kata/5571f712ddf00b54420000ee/train/javascript

function looseChange(cents) {
    var a = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
    if (cents <= 0) return a;
    a.Quarters = Math.floor(cents / 25);
    a.Dimes = Math.floor(cents % 25 / 10);
    a.Nickels = Math.floor(cents % 25 % 10 / 5);
    a.Pennies = Math.floor(cents % 25 % 10 % 5);
    return a;
}
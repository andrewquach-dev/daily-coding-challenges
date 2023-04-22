//https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript

function keepOrder(ary, val) {
    return ary.filter(a => a < val).length;
}
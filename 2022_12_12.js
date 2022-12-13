//https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript

String.prototype.isLetter = function () {
    const str = this.slice();
    if (str.length !== 1) return false;
    if (str.match(/[a-zA-Z]/)) return true
    return false
}
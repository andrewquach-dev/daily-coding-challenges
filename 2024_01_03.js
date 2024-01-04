//https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript

function sillycase(silly) {
    var c = Math.round(silly.length / 2);
    return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
}
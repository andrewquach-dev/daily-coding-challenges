//https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

function nextId(ids) {
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
}
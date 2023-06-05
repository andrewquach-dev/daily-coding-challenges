//https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript

var kookaCounter = function (laughing) {
    return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
}
//https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
    return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number);
};

Math.ceil = function (number) {
    return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function (number) {
    return parseInt(number);
};
//https://www.codewars.com/kata/57d532d2164a67cded0001c7

function histogram(results) {
    var histogram = '';

    for (var i = 5; i >= 0; --i)
        histogram += (i + 1) + '|' + '#'.repeat(results[i]) + (results[i] > 0 ? ' ' + results[i] : '') + "\n";

    return histogram;
}
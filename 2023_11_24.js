//https://www.codewars.com/kata/56fcc393c5957c666900024d

function code(s) {
    let str = s.replace(/\n/g, '')
        , len = str.length
        , res = '';

    let n = Math.ceil(Math.sqrt(len))
        , m = n * (n - 1);

    for (var i = 0; i < n; i++) {
        res += "\n";

        for (var j = 0; j < n; j++)
            res += str[m + i - n * j] || "\v";
    }

    return res.slice(1);
}

function decode(s) {
    let res = code(code(code(s)));
    return res.replace(/(\n|\v)/g, '');
}
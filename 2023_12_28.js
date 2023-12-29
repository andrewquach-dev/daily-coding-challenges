//https://www.codewars.com/kata/5840107b6fcbf56d2000010b

function palindromization(element, n) {
    var s = '';
    var i = 0;
    while (s.length < Math.floor(n / 2))
        s += element[(i++) % element.length];
    var c = s.split('').reverse().join('');
    if (n % 2 == 1)
        s += element[i % element.length];
    if (element == '' || n < 2)
        return 'Error!'
    return s + c;
}
//https://www.codewars.com/kata/569218bc919ccba77000000b

const ln = Math.log;

function dateNbDays(a0, a, p) {
    let days = Math.ceil((ln(a) - ln(a0)) / ln(1 + p / 36000));
    var date = new Date(2016, 0, 1 + days);
    return date.toISOString().split('T')[0];
}
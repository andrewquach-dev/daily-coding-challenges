//https://www.codewars.com/kata/555a7dc335d4c407af00006e/train/javascript

function tea42(input) {
    //string or num
    //string where every '2' char or 2 digit is replaced with a t
    //tea42('2ea') //should return 'tea'
    //tea42(9022) //should return '90tt'
    //tea42('2u2u') //should return 'tutu'
    //convert it to string
    //iterate through chars
    //check if it's 2
    //if it is then replace it
    return input.toString().split('').map(ch => ch == '2' ? 't' : ch).join('');
};
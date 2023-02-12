//https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript

function product(s) {
    return (s.match(/\?/g) || []).length * (s.match(/!/g) || []).length
}
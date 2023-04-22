//https://www.codewars.com/kata/57fafb6d2b5314c839000195/train/javascript

function remove(s) {
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}
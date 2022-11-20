//https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

function vaporcode(string) {
    return string.split(' ').join('').split('').map((l, i) => l = l.toUpperCase()).join('  ')
}
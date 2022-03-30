//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {

    let wolfIndex = queue.indexOf('wolf');

    if (wolfIndex + 1 === queue.length) {

        return "Pls go away and stop eating my sheep";

    } else {

        return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`;

    }

}
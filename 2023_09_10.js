//https://www.codewars.com/kata/52ed326b8df6540e06000029

const goto = (level, button) =>
    +[0, 1, 2, 3].includes(level) && +[`0`, `1`, `2`, `3`].includes(button) && (button - level);
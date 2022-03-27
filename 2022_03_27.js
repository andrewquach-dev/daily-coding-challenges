//https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

function findLongest(str) {
    return str.split(' ').reduce((longest, ele) => {
        if (ele.length > longest) {
            longest = ele.length;
        }
        return longest;
    }, 0);
}
//https://www.structy.net/problems/max-value


const maxValue = (nums) => {
    // todo
    let max = -Infinity
    for (let num of nums) {
        if (num > max) {
            max = num
        }
    }
    return max
};

module.exports = {
    maxValue,
};

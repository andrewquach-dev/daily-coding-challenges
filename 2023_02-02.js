//https://www.lintcode.com/problem/659/

var encode = (strs, nonASCIICode = String.fromCharCode(257)) => {
    return strs.join(nonASCIICode);/* Time O(N) | Ignore Auxillary Space O(N) */
};


var decode = (strs, nonASCIICode = String.fromCharCode(257)) => {
    return strs.split(nonASCIICode);/* Time O(N) | Ignore Auxillary Space O(N) */
};
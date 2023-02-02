
//https://www.codewars.com/kata/558ee8415872565824000007/solutions/javascript?filter=me&sort=best_practice&invalids=false

function isDivisible(...nums) {
    //Write your code here
    let a = [...nums];
    let ret = true;
    for (let i = 1; i < a.length; i++) {
        if (a[0] % a[i] != 0) {
            ret = false;
        }
    }
    return ret;
}
//https://www.codewars.com/kata/552ab0a4db0236ff1a00017a

function sillycase(silly) {
    //string
    //string with first half lower cased and last half uppercased

    return silly.length % 2 == 0 ? silly.slice(0, silly.length / 2).toLowerCase()
        + silly.slice(silly.length / 2, silly.length).toUpperCase() : silly.slice(0, Math.ceil(silly.length / 2)).toLowerCase()
    + silly.slice(Math.ceil(silly.length / 2), silly.length).toUpperCase()
}
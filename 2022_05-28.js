https://www.codewars.com/kata/5828713ed04efde70e000346/solutions/javascript/me/best_practice

function countLanguages(list) {
    return list.map(dev => dev['language']).reduce((a, ele) => {
        if (ele in a) {
            a[ele]++;
        } else {
            a[ele] = 1;
        }
        return a;
    }, {});
}
//https://www.codewars.com/kata/5c1ae703ba76f438530000a2/train/javascript

function wordMesh(arr) {
    let r = ""
    for (let i = 0; i < arr.length - 1; i++) {
        let t = (arr[i] + " " + arr[i + 1]).match(/(.+) \1/)
        if (!t) return "failed to mesh"
        r += t[1]
    }
    return r
}
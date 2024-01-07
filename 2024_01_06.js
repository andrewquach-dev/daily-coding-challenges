//https://www.codewars.com/kata/5516ab668915478845000780/train/javascript

function reverseByCenter(s) {
    //str
    //str but swap halves
    //reverseByCenter("secret")  == "retsec" // no center character
    //reverseByCenter("agent")   == "nteag"  // center character is "e"
    return s.length % 2 === 0 ? s.slice(Math.floor(s.length / 2), s.length) + s.slice(0, Math.floor(s.length / 2)) : s.slice(Math.floor(s.length / 2) + 1, s.length) + s.charAt(Math.floor(s.length / 2)) + s.slice(0, Math.floor(s.length / 2))

}
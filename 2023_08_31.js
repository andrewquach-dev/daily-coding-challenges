//https://www.codewars.com/kata/56c4931400165c5283000661

function countdown(millisecs) {
    var hours = parseInt(millisecs / 3600000)
    var minutes = parseInt(millisecs % 3600000 / 60000);
    var seconds = parseInt(millisecs % 360000 % 60000 / 1000);

    return (millisecs < 0 ? "-" : "+") + [hours, minutes, seconds].map(v => Math.abs(v)).map(v => v.toString().length < 2 ? "0" + v : v).join(":")
}
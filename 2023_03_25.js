//https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript

var AmIAfraid = function (day, num) {
    //Help me...
    return day == "Monday" && num == 12 || day == "Tuesday" && num > 95 || day == "Wednesday" && num == 34
        || day == "Thursday" && num == 0 || day == "Friday" && num % 2 == 0 || day == "Saturday" && num == 56 || day == "Sunday" && (num == 666 || num == -666)
}
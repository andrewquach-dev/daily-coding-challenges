//https://www.codewars.com/kata/581e1d083a4820eb4f00004f/train/javascript



function mod256WithoutMod(number) {
    if (number < 0) {
        return -mod256WithoutMod(-number);
    }
    return number & 255;
}
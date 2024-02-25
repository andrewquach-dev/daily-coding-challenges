//https://www.codewars.com/kata/55c423ecf847fbcba100002b

function filterWords(phrase) {
    return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig, 'awesome');
}
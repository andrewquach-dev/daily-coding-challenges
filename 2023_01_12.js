//https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript

const validSpacing = (sentence) => {
    return sentence.replace(/\s{2,}/g, ' ').trim() === sentence;
};
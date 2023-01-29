//https://www.codewars.com/kata/571c1e847beb0a8f8900153d/train/javascript

function rakeGarden(garden) {
    // TODO: Program Me
    return garden.split(' ').map(w => w = w != 'rock' | 'gravel' ? 'gravel' : w).join(' ');
}
//https://www.codewars.com/kata/57f8842367c96a89dc00018e

function catMouse(map, moves) {
    //coding and coding...
    const indexOfC = map.indexOf('C')
    const indexOfm = map.indexOf('m')
    if (!~indexOfC || !~indexOfm) {
        return 'boring without two animals'
    }
    const stepLength = map.indexOf(`
  `) + 1
    const step = Math.abs(indexOfC % stepLength - indexOfm % stepLength) + Math.abs(parseInt(indexOfC / stepLength) - parseInt(indexOfm / stepLength))
    return step > moves ? 'Escaped!' : 'Caught!'
}
//https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
  const dev = list.find(x => x.language === 'Python');
  return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers";
}
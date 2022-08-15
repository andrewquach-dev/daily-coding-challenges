//https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

function allContinents(list) {
  return ["Africa", "Americas", "Asia", "Europe", "Oceania"].every((c) =>
    list.some((dev) => dev.continent === c)
  );
}

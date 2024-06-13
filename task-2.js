function makeArray(firstArray, secondArray, maxLenght) {
  const destinationArray = firstArray.concat(secondArray);

  if (destinationArray.length <= maxLenght) {
    return destinationArray;
  } else {
    const maxLenghtArray = destinationArray.slice(0, maxLenght);
    return maxLenghtArray;
  }
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = firstArray.concat(secondArray);//обєднує два масиви в один
  if (combinedArray.length > maxLength) { //перевіряє чи довжина масиву більша за maxLength
    return combinedArray.slice(0, maxLength);//якщо так, то повертає масив з maxLength елементами
  }
  return combinedArray;//якщо ні, то повертає обєднаний масив
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

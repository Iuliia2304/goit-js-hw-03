function filterArray(numbers, value) {
  const result = [];//порожній масив
  
  for (let i = 0; i < numbers.length; i++) {//перебирає масив
    if (numbers[i] > value) {//перевіряє чи елемент масиву більший за value
      result.push(numbers[i]);//якщо так, то додає його в result
    }
  }

  return result;//повертає масив з елементами більшими за value
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

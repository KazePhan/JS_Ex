function sumArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
let array = [1, 4, 5, 8];
console.log(sumArray(array));

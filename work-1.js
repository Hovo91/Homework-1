function arrayLargerNumber(array, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      newArray.push(array[i]);
    }
  }
  return newArray.length === 0 ? 'Such values do not exist.' : newArray;
}

console.log(arrayLargerNumber([1, 1, 2, -3, 0, 8, 4, 0] , 3));

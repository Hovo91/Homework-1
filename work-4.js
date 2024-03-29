function getMin(array, i = 0, result = Infinity) {
  if (array[i] < result && array[i] >= 0) {
      result = array[i];
  }
  if (array[i] !== undefined) {
      return getMin(array, ++i, result);
  }
  return result >= 0 && result !== Infinity ? result : -1;
}

console.log(getMin([56, -9, 87, -23, 0, -105, 55, 1]));

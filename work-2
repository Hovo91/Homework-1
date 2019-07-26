function getEven(firstnumber, secondnumber) {
  let result = '';
  for (let i = firstnumber; i <= secondnumber; i++) {
    if (isAllDigitsEven(i)) {
      if (result) {
        result += ', ';
      }
      result += i;
    }
  }
  if (result) {
    return result;
  } else {
    return 'Such numbers does not exist.';
  }
}

function isAllDigitsEven(number) {
  let result = true;
  while (number !== 0) {
    let currentDigit = number % 10;
    if (currentDigit % 2 !== 0) {
      result = false;
      break;
    }
    number = Math.floor(number / 10);
  }
  return result;
}

console.log(getEven(19, 42));

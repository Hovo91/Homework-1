function isNumberDigitsOdd(number) {
    let lastDigit = number % 10;
    if (number === 0) {
        return true;
    } else if (lastDigit % 2 === 0 || lastDigit === 0) {
        return false;
    } else {
        return isNumberDigitsOdd((number - lastDigit) / 10);
    }
}

console.log(isNumberDigitsOdd(111111359));

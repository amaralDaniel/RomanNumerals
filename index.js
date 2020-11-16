const romanNumbers = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
const arabicNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const hasNumber = /\d/;

RomanNumber = (num) => {
  if (num === null || num === "" || num === "error") {
    throw new Error("value required");
  }
  if (num < 1 || num > 3999) {
    throw new Error("invalid range");
  }

  //roman to arabic
  if (typeof num == "string") {
    if (hasNumber.test(num)) {
      throw new Error("value required");
    } else {
      let currentIndex = 0;
      let maxLength = num.length;
      let current
      while (currentIndex < maxLength) {

      }
    }
  } else {
    //arabic to roman
    let numberToConvert = num;
    let currentIndex = 0;
    var output = [];
    var quotient = 0;
    var rest = 0;
    while (numberToConvert > 0) {
      quotient = Math.floor(numberToConvert / arabicNumbers[currentIndex]);
      rest = numberToConvert % arabicNumbers[currentIndex];
      if (quotient > 0) {
        output.push(romanNumbers[currentIndex].repeat(quotient));
        numberToConvert = rest;
        currentIndex++;
      } else {
        currentIndex++;
      }
    }
    return output.join("");
  }
};

//console.log(RomanNumber('1473'));

module.exports = {
  RomanNumber: RomanNumber,
};

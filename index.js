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

function RomanNumber(input) {
  if (input === null || input === "" || input === "error") {
    throw new Error("value required");
  }
  if (input < 1 || input > 3999) {
    throw new Error("invalid range");
  }

  //roman to arabic
  if (typeof input == "string") {
    if (hasNumber.test(input)) {
      throw new Error("value required");
    } else {
      let currentIndex = 0, output = 0;
      let maxLength = input.length;
      const receivedRomanNumeral = input.split("");
      let currentCharacter = "";
      var lastCharacter = receivedRomanNumeral[0];
      var characterCount = 1;

      while (currentIndex < maxLength) {
        if (output > 3999) {
          throw new Error("value required");
        }
        currentCharacter = receivedRomanNumeral[currentIndex];

        if (currentIndex > 0) {
          if (currentCharacter == lastCharacter) {
            characterCount++;

            if (characterCount > 3) {
              throw new Error("value required");
            }
          } else {
            lastCharacter = currentCharacter;
            characterCount = 1;
          }
        }
        if (currentIndex + 1 < maxLength) {
          let currentRomanNumberIndex = romanNumbers.indexOf(currentCharacter);
          let nextCharacter = receivedRomanNumeral[currentIndex + 1];
          let nextRomanNumberIndex = romanNumbers.indexOf(nextCharacter);
          let currentArabicNumber = arabicNumbers[currentRomanNumberIndex];
          let nextArabicNumber = arabicNumbers[nextRomanNumberIndex];

          if (currentRomanNumberIndex <= nextRomanNumberIndex) {
            output += currentArabicNumber;
            currentIndex++;
          } else {
            output += nextArabicNumber - currentArabicNumber;
            currentIndex += 2;
          }
        } else {
          let currentRomanNumberIndex = romanNumbers.indexOf(currentCharacter);
          let currentArabicNumber = arabicNumbers[currentRomanNumberIndex];

          output += currentArabicNumber;
          currentIndex++;
        }
      }

      var outputObject = {
        toInt: () => output,
        toString: () => input,
      };
      return outputObject;
    }
  } else {
    //arabic to roman
    let numberToConvert = input;
    let currentIndex = 0, quotient = 0, rest = 0;
    var output = [];

    while (numberToConvert > 0) {
      let currentArabicNumber = arabicNumbers[currentIndex];
      quotient = Math.floor(numberToConvert / currentArabicNumber);
      rest = numberToConvert % currentArabicNumber;

      if (quotient > 0) {
        output.push(romanNumbers[currentIndex].repeat(quotient));
        numberToConvert = rest;
        currentIndex++;
      } else {
        currentIndex++;
      }
    }
    var outputObject = {
      toInt: () => input,
      toString: () => output.join(""),
    };
    return outputObject;
  }
}

/*
var newRomanNumber1 = new RomanNumber('XX');
var newRomanNumber2 = new RomanNumber(40);

console.log(newRomanNumber1.toInt());
console.log(newRomanNumber1.toString());

console.log(newRomanNumber2.toInt());
console.log(newRomanNumber2.toString());

*/

//for testing purposes
module.exports = {
  RomanNumber: RomanNumber,
};

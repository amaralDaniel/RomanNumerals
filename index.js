const { expect } = require("@jest/globals");
const { describe } = require("yargs");

var testChars = [0, 1, 3, 4, 5, 'I', 'III', 'IIII', 'IV', 'V', 1968, '1473', 2999, 3000, 10000, 'CDXXIX', 'CD1X', 'error', 'MCDLXXXII', 'MCMLXXX', 'MMMMCMXCIC', 'MMMMDMXCIX'];

describe("Null input", () => {
    test("the output should be a value required exception error", () => {
        const input = null;
        const output = 'value required';

        expect(RomanNumber(input)).toEqual(output);
    });
});

describe("Empty input", () => {
    test("the output should be a value required exception error", () => {
        const input = '';
        const output = 'value required';
        
        expect(RomanNumber(input)).toEqual(output);
    });
});

describe("0 as input", () => {
    test("the output should be a invalid range exception error", () => {
        const input = 0;
        const output = 'invalid range';
        
        expect(RomanNumber(input)).toEqual(output);
    });
});

describe("1 to 5 as input", () => {
    test("the output should be I-V as roman numeral", () => {

        expect(RomanNumber(1)).toEqual('I');
        expect(RomanNumber(2)).toEqual('II');
        expect(RomanNumber(3)).toEqual('III');
        expect(RomanNumber(4)).toEqual('IV');
        expect(RomanNumber(5)).toEqual('V');
    });
});

describe("I to V as input", () => {
    test("the output should be 1-5 as arabic number", () => {

        expect(RomanNumber('I')).toEqual(1);
        expect(RomanNumber('II')).toEqual(2);
        expect(RomanNumber('III')).toEqual(3);
        expect(RomanNumber('IV')).toEqual(4);
        expect(RomanNumber('V')).toEqual(5);
    });
});


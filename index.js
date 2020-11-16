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

describe("10000 as input", () => {
    test("the output should be a invalid range exception error", () => {
        const input = 10000;
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

describe("1968 as input", () => {
    test("the output should be MCMLXVIII", () => {
        expect(RomanNumber(1968)).toEqual('MCMLXVIII');
    });
});

describe("'1473' as input", () => {
    test("the output should be value required exception", () => {
        expect(RomanNumber('1473')).toEqual('invalid range');
    });
});

describe("2999 as input", () => {
    test("the output should be MMCMXCIX", () => {
        expect(RomanNumber(2999)).toEqual('MMCMXCIX');
    });
});

describe("3000 as input", () => {
    test("the output should be MMM", () => {
        expect(RomanNumber(3000)).toEqual('MMM');
    });
});

describe("'CDXXIX' as input", () => {
    test("the output should be 429", () => {
        expect(RomanNumber('CDXXIX')).toEqual(429);
    });
});

describe("'CD1X' as input", () => {
    test("the output should be value required", () => {
        expect(RomanNumber('CD1X')).toEqual('value required');
    });
});

describe("'error' as input", () => {
    test("the output should be value required", () => {
        expect(RomanNumber('error')).toEqual('value required');
    });
});

describe("'MCDLXXXII' as input", () => {
    test("the output should be 1482", () => {
        expect(RomanNumber('MCDLXXXII')).toEqual(1482);
    });
});

describe("'MCMLXXX' as input", () => {
    test("the output should be 1980", () => {
        expect(RomanNumber('MCMLXXX')).toEqual(1980);
    });
});

describe("'MMMMCMXCIC' as input", () => {
    test("the output should be value required", () => {
        expect(RomanNumber('MMMMCMXCIC')).toEqual('value required');
    });
});

describe("'MMMMDMXCIX' as input", () => {
    test("the output should be value required", () => {
        expect(RomanNumber('MMMMDMXCIX')).toEqual('value required');
    });
});




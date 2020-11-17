var { RomanNumber } = require("./index");

describe("Null input", () => {
  test("the output should be a value required exception error", () => {
    const input = null;
    const output = "value required";

    expect(() => {
      RomanNumber(input);
    }).toThrow(output);
  });
});

describe("Empty input", () => {
  test("the output should be a value required exception error", () => {
    const input = "";
    const output = "value required";

    expect(() => {
      RomanNumber(input);
    }).toThrow(output);
  });
});

describe("0 as input", () => {
  test("the output should be a invalid range exception error", () => {
    const input = 0;
    const output = "invalid range";

    expect(() => {
      RomanNumber(input);
    }).toThrow(output);
  });
});

describe("10000 as input", () => {
  test("the output should be a invalid range exception error", () => {
    const input = 10000;
    const output = "invalid range";

    expect(() => {
      RomanNumber(input);
    }).toThrow(output);
  });
});

describe("1 to 10 as input", () => {
  test("the output should be I-V as roman numeral", () => {
    expect(RomanNumber(1).toString()).toEqual("I");
    expect(RomanNumber(2).toString()).toEqual("II");
    expect(RomanNumber(3).toString()).toEqual("III");
    expect(RomanNumber(4).toString()).toEqual("IV");
    expect(RomanNumber(5).toString()).toEqual("V");
    expect(RomanNumber(6).toString()).toEqual("VI");
    expect(RomanNumber(7).toString()).toEqual("VII");
    expect(RomanNumber(8).toString()).toEqual("VIII");
    expect(RomanNumber(9).toString()).toEqual("IX");
    expect(RomanNumber(10).toString()).toEqual("X");
  });
});

describe("I to X as input", () => {
  test("the output should be 1-5 as arabic number", () => {
    expect(RomanNumber("I").toInt()).toEqual(1);
    expect(RomanNumber("II").toInt()).toEqual(2);
    expect(RomanNumber("III").toInt()).toEqual(3);
    expect(RomanNumber("IV").toInt()).toEqual(4);
    expect(RomanNumber("V").toInt()).toEqual(5);
    expect(RomanNumber("VI").toInt()).toEqual(6);
    expect(RomanNumber("VII").toInt()).toEqual(7);
    expect(RomanNumber("VIII").toInt()).toEqual(8);
    expect(RomanNumber("IX").toInt()).toEqual(9);
    expect(RomanNumber("X").toInt()).toEqual(10);
  });
});

describe("1968 as input", () => {
  test("the output should be MCMLXVIII", () => {
    expect(RomanNumber(1968).toString()).toEqual("MCMLXVIII");
  });
});

describe("'1473' as input", () => {
  test("the output should be value required exception", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("1473");
    }).toThrow(output);
  });
});

describe("2999 as input", () => {
  test("the output should be MMCMXCIX", () => {
    expect(RomanNumber(2999).toString()).toEqual("MMCMXCIX");
  });
});

describe("3000 as input", () => {
  test("the output should be MMM", () => {
    expect(RomanNumber(3000).toString()).toEqual("MMM");
  });
});

describe("'CDXXIX' as input", () => {
  test("the output should be 429", () => {
    expect(RomanNumber("CDXXIX").toInt()).toEqual(429);
  });
});

describe("'CD1X' as input", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber('CD1X');
    }).toThrow(output);
  });
});

describe("'error' as input", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("error");
    }).toThrow(output);
  });
});

describe("'MCDLXXXII' as input", () => {
  test("the output should be 1482", () => {
    expect(RomanNumber("MCDLXXXII").toInt()).toEqual(1482);
  });
});

describe("'MCMLXXX' as input", () => {
  test("the output should be 1980", () => {
    expect(RomanNumber("MCMLXXX").toInt()).toEqual(1980);
  });
});

describe("'MMMMCMXCIC' as input", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("MMMMCMXCIC");
    }).toThrow(output);
  });
});

describe("'MMMMDMXCIX' as input", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("MMMMDMXCIX");
    }).toThrow(output);
  });
});

describe("No more than 3 straight equal characters", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("IIII");
    }).toThrow(output);
  });
});

describe("No more than 3 straight equal characters", () => {
  test("the output should be value required", () => {
    const output = "value required";

    expect(() => {
      RomanNumber("MCMVIIII");
    }).toThrow(output);
  });
});

describe("'MCMLXXX' as input", () => {
  test("the output should be 1980", () => {
    expect(RomanNumber("MCMLXXX").toString()).toEqual('MCMLXXX');
  });
});

describe("12 as input", () => {
  test("the output should be XII", () => {
    expect(RomanNumber(12).toInt()).toEqual(12);
  });
});



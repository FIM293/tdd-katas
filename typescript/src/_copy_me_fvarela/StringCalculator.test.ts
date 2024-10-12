import { StringCalculator } from "./StringCalculator";

describe(StringCalculator, () => {
  it("`An empty string returns zero `'' => 0`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    const result = stringCalculator.add("");

    // assert
    expect(result).toEqual(0);
  });
  it("2. A single number returns the value `'1' => 1` `'2' => 2`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add("1");
    // assert
    expect(result).toEqual(1);

    // act
    result = stringCalculator.add("2");
    // assert
    expect(result).toEqual(2);
  });
  it("3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add("1,2");
    // assert
    expect(result).toEqual(3);

    // act
    result = stringCalculator.add("10,20");
    // assert
    expect(result).toEqual(30);
  });
  it("4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add('1\n2');
    // assert
    expect(result).toEqual(3);
  });
  it("5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add('1\n2,3\n4');
    // assert
    expect(result).toEqual(10);
  });
  it("6. Negative numbers throw an exception with the message `'-1,2,-3' => 'negatives not allowed: -1,-3'`", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    expect(() => {
      stringCalculator.add('-1,2,-3');
    }).toThrowError('negatives not allowed: -1,-3');
  });
  it("7. Numbers greater than 1000 are ignored", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add('1\n2,3\n4,1000,1001\n1002');
    // assert
    expect(result).toEqual(1010);
  });
  it("8. A single char delimiter can be defined on the first line starting with `//` (e.g `//#\n1#2` for a ‘#’ as the delimiter)", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add('//#\n1#2');
    // assert
    expect(result).toEqual(3);
  });
  it("9. A multi char delimiter can be defined on the first line starting with `//` (e.g. `//###\n1###2` for ‘###’ as the delimiter)", () => {
    // arrange
    const stringCalculator = new StringCalculator();

    // act
    let result = stringCalculator.add('//###\n1###2');
    // assert
    expect(result).toEqual(3);
  });
});

import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(1);

    // assert
    expect(result).toEqual([]);
  });
  it("`2` should return `[2]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(2);

    // assert
    expect(result).toEqual([2]);
  });
  it("`3` should return `[3]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(3);

    // assert
    expect(result).toEqual([3]);
  });
  it("`4` should return `[2,2]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(4);

    // assert
    expect(result).toEqual([2,2]);
  });
  it("`5` should return `[5]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(5);

    // assert
    expect(result).toEqual([5]);
  });
  it("`6` should return `[2,3]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(6);

    // assert
    expect(result).toEqual([2,3]);
  });
  it("`7` should return `[7]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(7);

    // assert
    expect(result).toEqual([7]);
  });
  it(" `8` should return `[2,2,2]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(8);

    // assert
    expect(result).toEqual([2,2,2]);
  });
  it("`9` should return `[3,3]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(9);

    // assert
    expect(result).toEqual([3,3]);
  });
  it("`4620` should return `[2,2,3,5,7,11]`", () => {
    // arrange
    const sut = new PrimeFactors();

    // act
    const result = sut.generate(4620);

    // assert
    expect(result).toEqual([2,2,3,5,7,11]);
  });
});

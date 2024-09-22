import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(1);
    expect(result).toEqual([]);
  });
  it("should return [2] when number is 2", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(2);
    expect(result).toEqual([2]);
  });
  it("should return [3] when number is 3", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(3);
    expect(result).toEqual([3]);
  });
  it("should return [2,2] when number is 4", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(4);
    expect(result).toEqual([2,2]);
  });
  it("should return [5] when number is 5", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(5);
    expect(result).toEqual([5]);
  });
  it("should return [2,3] when number is 6", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(6);
    expect(result).toEqual([2,3]);
  });
});

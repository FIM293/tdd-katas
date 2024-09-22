import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("should return [] when number is 1", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(1);
    expect(result).toEqual([]);
  });
});

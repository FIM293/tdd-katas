import { PrimeFactors } from "./PrimeFactors";

describe(PrimeFactors, () => {
  it("Debe retornar un arreglo vació si el numero es 1", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(1);
    expect(result).toEqual([]);
  });
});

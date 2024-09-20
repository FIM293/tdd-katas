import { PrimeFactors } from "./PrimeFactors";
/*
- `1` should return `[]`
- `2` should return `[2]`
- `3` should return `[3]`
- `4` should return `[2,2]`
- `5` should return `[5]`
- `6` should return `[2,3]`
- `7` should return `[7]`
- `8` should return `[2,2,2]`
- `9` should return `[3,3]`
- `4620` should return `[2,2,3,5,7,11]`

*/
describe(PrimeFactors, () => {
  it("Debe retornar un arreglo vació si el numero es 1", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(1);
    expect(result).toEqual([]);
  });

  it("Debe retornar un arreglo [2] si el numero es 2", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(2);
    expect(result).toEqual([2]);
  });
  it("Debe retornar un arreglo [3] si el numero es 3", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(3);
    expect(result).toEqual([3]);
  });
  it("Debe retornar un arreglo [2, 2] si el numero es 4", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(4);
    expect(result).toEqual([2,2]);
  });
  it("Debe retornar un arreglo [5] si el numero es 5", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(5);
    expect(result).toEqual([5]);
  });

  it("Debe retornar un arreglo [2, 3] si el numero es 6", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(6);
    expect(result).toEqual([2, 3]);
  });

  it("Debe retornar un arreglo [7] si el numero es 7", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(7);
    expect(result).toEqual([7]);
  });

  it("Debe retornar un arreglo [2, 2, 2] si el numero es 8", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(8);
    expect(result).toEqual([2, 2, 2]);
  });

  it("Debe retornar un arreglo [3, 4] si el numero es 9", () => {
    const sut = new PrimeFactors();
    const result = sut.generate(9);
    expect(result).toEqual([3, 3]);
  });

});

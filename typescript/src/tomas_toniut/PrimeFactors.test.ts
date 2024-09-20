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



});

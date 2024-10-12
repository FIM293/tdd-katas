export class PrimeFactors {
  constructor() {}

  generate(number: number): number[] {
    const result = [];
    for (let divisor = 2; number > 1; divisor++) {
      while (number % divisor === 0) {
        result.push(divisor);
        number = number / divisor;
      }
    }
    return result;
  }
}

export class PrimeFactors {
  constructor() {}

  generate(number) {
    let factores = [];

    if (number ===1)
      return factores;
    else if (number === 2)
      factores = [2];
    else if (number === 3)
      factores = [3];
    else {
      let divisor = 2;
      while (number % divisor === 0) {
        factores.push(divisor);
        number = number / divisor;
      }

    }
    return factores;
  }
}

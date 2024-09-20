export class PrimeFactors {
  constructor() {}

  generate(numero) {
    let factores = [];

    if (numero ===1)
      return factores;
    else if (numero === 2)
      factores = [2];
    else if (numero === 3)
      factores = [3];
    else if (numero === 5)
      factores = [5];
    else {
      let divisor = 2;
      while (numero>1){
        while (numero % divisor === 0) {
          factores.push(divisor);
          numero = numero / divisor;
        }
        divisor ++;
      }
    }
    return factores;
  }
}

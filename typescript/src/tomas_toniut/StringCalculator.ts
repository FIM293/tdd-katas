export class StringCalculator {
  constructor() {}

  add(input:string) {
    if (input === '')
      return 0;
    const numbers = input.split(/[, \n]+/);
    //el reduce toma la variable 'sum' como acumuladr y 'num' como el valor actual de la iteración. El cero al final es el valor inicial de acumulador. 
    const result = numbers.reduce((sum, num) => {
      const parsedNum = parseInt(num);
      if (parsedNum < 0) throw new Error(`negativos no están permitidos: ${numbers.join(',')}`);
      
      return sum + parsedNum;
    }, 0)
    return Number (result);
  }
}

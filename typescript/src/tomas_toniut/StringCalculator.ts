export class StringCalculator {
  constructor() {}

  add(input:string) {
    if (input === '')
      return 0;
    const numbers = input.split(/[, \n]+/);
    console.log(numbers)
    //el reduce toma la variable 'sum' como acumuladr y 'num' como el valor actual de la iteración. El cero al final es el valor inicial de acumulador. 
    const result = numbers.reduce((sum, num) => sum + parseInt(num), 0)
    return Number (result);
  }
}

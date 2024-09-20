export class StringCalculator {
  constructor() {}

  add(input:string) {
    if (input === '')
      return 0;
    let numbers: string[];

    // Manejo de delimitadores personalizados
    if (input.startsWith('//')) {
      const [delimiterLine, ...rest] = input.split('\n');
      const delimiter = delimiterLine.slice(2); // Extrae el delimitador
      input = rest.join('\n'); // Elimina la línea del delimitador
      numbers = input.split(new RegExp(delimiter)); // Usa el delimitador personalizado
    } else {
      numbers = input.split(/[, \n]+/); // Delimitadores por defecto: coma y salto de línea
    }
    //el reduce toma la variable 'sum' como acumuladr y 'num' como el valor actual de la iteración. El cero al final es el valor inicial de acumulador. 
    const result = numbers.reduce((sum, num) => {
      const parsedNum = parseInt(num);
      if (parsedNum<=1000){
        if (parsedNum < 0) throw new Error(`negativos no están permitidos: ${numbers.join(',')}`);
        
        return sum + parsedNum;
      }
      else return sum
    }, 0)
    return Number (result);
  }
}

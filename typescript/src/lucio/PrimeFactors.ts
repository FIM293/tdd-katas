export class PrimeFactors {
  constructor() {}

  generate(number) {
    //Si es primo retorno el numero
    if(this.isPrime(number))
      return [number];
    let res = [];

    // Iterar sobre todos los posibles factores primos
    for (let i = 2; i <= number; i++) {
      // Mientras el número sea divisible por 'i', es un factor primo
      while (number % i === 0) {
        res.push(i); // Añadir el factor primo
        number = number / i; // Reducir el número
      }
    }

    return res;
  }

  isPrime(number){
    if (number <= 1) {
      return false;
    }
  
    // Solo necesitamos verificar hasta la raíz cuadrada de 'number'
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Si es divisible por cualquier número, no es primo
      }
    }
  
    return true; // Si no es divisible por ningún número, es primo
  }
}

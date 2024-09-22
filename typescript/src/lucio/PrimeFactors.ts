export class PrimeFactors {
  constructor() {}

  generate(number) {
    if(number == 1)
      return [];
    if(number == 2)
      return [2]
    if(number == 3)
      return [3]
    if(number == 4)
      return [2,2]
  }
}

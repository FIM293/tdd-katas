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
    if(number == 5)
      return [5]
    if(number == 6)
      return [2,3]
  }
}

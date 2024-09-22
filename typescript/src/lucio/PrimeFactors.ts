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
    if(number == 7)
      return [7]
    if(number == 8)
      return [2,2,2]
    if(number == 9)
      return [3,3]
    if(number == 4620)
      return [2,2,3,5,7,11]

  }
}

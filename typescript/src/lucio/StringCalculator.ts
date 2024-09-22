export class StringCalculator {
  constructor() {}

  add(input) {
    //An empty string returns zero
    if(input == "")
      return 0;
    //A single number returns the value '1' => 1 '2' => 2
    if(Number(input))  
      return Number(input);
    if(input.includes(",") || input.includes("/n")){
      const numbers = input.split(/[,\/n]/).map(Number);
      const negatives = numbers.filter(num => num < 0);
      if (negatives.length > 0) 
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
      return input.split(/[,\/n]/).map(Number).reduce((acc, num) => acc + num, 0);
    }
    return null;
  }
}

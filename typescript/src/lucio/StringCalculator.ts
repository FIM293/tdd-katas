export class StringCalculator {
  constructor() {}

  add(input) {
    //An empty string returns zero
    if(input == "")
      return 0;
    //A single number returns the value '1' => 1 '2' => 2
    if(Number(input))  
      return Number(input);
    //Two numbers, comma delimited, returns the sum '1,2' => 3 '10,20' => 30
    if(input.includes(","))
      return input.split(",").map(Number).reduce((acc, num) => acc + num, 0);
    return null;
  }
}

export class StringCalculator {
  constructor() {}

  add(input) {
    //An empty string returns zero
    if(input == "")
      return 0;
    //A single number returns the value '1' => 1 '2' => 2
    if(Number(input))  
      return Number(input);
    if(input.includes(",") || input.includes("/n"))
      return input.split(/[,\/n]/).map(Number).reduce((acc, num) => acc + num, 0);
    return null;
  }
}

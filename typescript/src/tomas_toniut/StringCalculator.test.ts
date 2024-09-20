import { StringCalculator } from "./StringCalculator";
/*
1. An empty string returns zero `'' => 0`

2. A single number returns the value `'1' => 1` `'2' => 2`

3. Two numbers, comma delimited, returns the sum `'1,2' => 3` `'10,20' => 30`

4. Two numbers, newline delimited, returns the sum `'1\n2' => 3`

5. Three numbers, delimited either way, returns the sum `'1\n2,3\n4' => 10`

6. Negative numbers throw an exception with the message `'-1,2,-3' => 'negatives not allowed: -1,-3'`

   **stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.**

7. Numbers greater than 1000 are ignored

8. A single char delimiter can be defined on the first line starting with `//` (e.g `//#\n1#2` for a ‘#’ as the delimiter)

9. A multi char delimiter can be defined on the first line starting with `//` (e.g. `//###\n1###2` for ‘###’ as the delimiter)

*/
describe(StringCalculator, () => {
  it("debe retornar cero, si la entrada es una cadena vacía", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('');
    expect(result).toEqual(0);
  });

  it("debe retornar un numero simple, si la entrada es un numero simple", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('15');
    expect(result).toEqual(15);
  });

  it("debe retornar la suma de los numeros, si la entrada son numeros delimitados por comas", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('15,25');
    expect(result).toEqual(40);
  });

  it("debe retornar la suma de los numeros, si la entrada son numeros delimitados por baja de linea", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('15\n25');
    expect(result).toEqual(40);
  });

  it("debe retornar la suma de los numeros, si la entrada son numeros delimitados por baja de linea o coma", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('1\n2,3\n4');
    expect(result).toEqual(10);
  });

  it("debe retornar Error, si la entrada son numeros negativos", () => {
    const stringCalculator = new StringCalculator();
    expect(() =>(stringCalculator.add('-2,-4'))).toThrow('negativos no están permitidos: -2,-4');
  });

  it("debe ignorar los numeros mayores a 1000", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('1,2,1001');
    expect(result).toEqual(3);
  });

  it("debe permitir un delimitador de un solo carácter", () => {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.add('//#\n1#2');
    expect(result).toEqual(3);
  });


});

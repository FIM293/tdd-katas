# TDD Katas

Basado en <https://github.com/wix/tdd-katas>

## Las tres reglas de TDD

1. No está permitido escribir ningún código de producción a menos que sea para hacer pasar una prueba unitaria que falla.
2. No está permitido escribir más de una prueba unitaria que lo necesario para que falle; y los fallos de compilación son fallos.
3. No está permitido escribir más código de producción del necesario para hacer pasar una única prueba unitaria que falla.

Lo que significa que el flujo de trabajo es:

1. Escribe una prueba que falle. Deja de escribir la prueba tan pronto como falle.
2. Escribe el código de producción mínimo necesario para que la prueba pase. Deja de escribir cualquier código una vez que la prueba pase.
3. Refactoriza el código de la prueba y el código de producción sin alterar la funcionalidad. Todas las pruebas deben pasar.

## Uso de este repositorio

Este repositorio provee templates para varios katas en diferentes lenguajes, hay una carpeta para cada uno de ellos, cada una de ellas con las instrucciones correspondientes para preparar el entorno y ejecutar los tests.

- [TypeScript](./typescript/README.md)
- [Java](./java/README.md)

### Como participar

1. Clona el repositorio
2. Selecciona un lenguaje y prepara una copia de `_copy_me` a una nueva carpeta con tu nombre según las instrucciones provistas para el lenguaje elegido.
3. Por cada kata que desees hacer
   1. Completa el kata con un commit por cada paso
   2. Crea un pull request para revisar tu aproximación
   3. Haz el merge

## Katas

### Greeter

**Before you start:**

- **Try not to read ahead.**
- **Do one task at a time. The trick is to learn to work incrementally.**

This kata demonstrates the problems of static scoped functions and objects.

All tests should always pass, regardless of environment conditions.

1. Write a `Greeter` class with `greet` function that receives a `name` as input and outputs `Hello <name>`.
   The signature of `greet` should not change throughout the kata. You are allowed to construct `Greeter` object as you please.

2. `greet` trims the input

3. `greet` capitalizes the first letter of the name

4. `greet` returns `Good morning <name>` when the time is 06:00-12:00

5. `greet` returns `Good evening <name>` when the time is 18:00-22:00

6. `greet` returns `Good night <name>` when the time is 22:00-06:00

7. `greet` logs into console each time it is called

### String Calculator

Made popular by [Roy Osherove](http://osherove.com/tdd-kata-1/).

#### Before you start

- **Try not to read ahead.**
- **Do one task at a time. The trick is to learn to work incrementally.**
- **Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata**

This kata is one of the simplest and best ways to practice step-by-step fluent tdd, and provides an easy way to get proficient in a language.

Write a method `add` under an object `StringCalculator` that, given a delimited string, returns the sum of the numbers in the string.

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

### Prime Factors

Made popular by [Uncle Bob](http://butunclebob.com/ArticleS.UncleBob.ThePrimeFactorsKata).

This kata demonstrates the _Transformation Priority Premise_ (Ver más en [Wikipedia](https://en.wikipedia.org/wiki/Transformation_Priority_Premise) o [Uncle Bob's site](https://blog.cleancoder.com/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)).

Write a function `generate` under a module `PrimeFactors` that, given an integer, returns the list
containing the prime factors in numerical sequence.

- `1` should return `[]`
- `2` should return `[2]`
- `3` should return `[3]`
- `4` should return `[2,2]`
- `5` should return `[5]`
- `6` should return `[2,3]`
- `7` should return `[7]`
- `8` should return `[2,2,2]`
- `9` should return `[3,3]`
- `4620` should return `[2,2,3,5,7,11]`

### Bowling Game

See the original [presentation](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata).

This kata demonstrates the power of doing tests first, and how up-front design decisions can change
and give way to a simpler implementation by coding iteratively.

Write a `BowlingGame` object with methods `roll(pins)` and `getScore()`.

This will be the game engine which follows the rules of bowling:

- The game consists of 10 frames, in each frame the player has the ability to knock down 10 pins.
- The score for the frame is the total number of pins knocked down + bonuses for `strikes` and `spares`.
- A `spare` is when the player knocks down all 10 pins in 2 tries. The bonus for a spare is the next roll.
- A `strike` is when the player knocks down all 10 pins in 1 try. The bonus is the next 2 rolls.
- In the tenth frame a player who rolls a spare / strike gets an extra roll(s) to complete the frame.
- No more than 3 rolls can be rolled in the 10th frame.

### FizzBuzz

[Original repo & author](https://github.com/sarunas/fizz-buzz-kata)

This kata is different on purpose: there is no example code to refer/compare to. It leaves more room for
exploration of different approaches.

- Write a program that returns array of numbers from 1 to 100, while multiples of three return "Fizz" instead of the
  number, multiples of five return "Buzz". Multiples of both three and five return "FizzBuzz".
- Add a way to change range, instead of printing numbers from 1 to 100. Examples: numbers from 1 to 20, from 15 to 50.
- Add rules for 7 and 11: 7 returns "Foo", 11 returns "Boo" and multiples of both return "FooBoo".
- Add new rule for numbers smaller than 16 which return "Small" and a rule for numbers bigger than 95 which return "Big".
- Add ability to change rules for initial requirement, instead of "Fizz" (multiples of 3) return "Buzz", and instead of
  "Buzz" (multiples of 5) return "Fizz"
- Add new rule for "multiples of 3 and 5" return "FTW", and for "multiples of 3 or 5" return "GG"

### Diamond

From [Ploeh's Blog](https://blog.ploeh.dk/2015/01/10/diamond-kata-with-fscheck/) (and others before him)

Given a letter, print a diamond starting with 'A' with the supplied letter at the widest point.

For example: print-diamond 'C' prints

```
  A
 B B
C   C
 B B
  A
```

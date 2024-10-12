export class StringCalculator {
  constructor() {}

  add(input: string): number {
    if (input === '') return 0;

    let delimiter = ',';
    if (input.startsWith('//')) {
      const delimiterEndIndex = input.indexOf('\n');
      delimiter = input.substring(2, delimiterEndIndex);
      input = input.substring(delimiterEndIndex + 1);
    }

    const escapedDelimiter = delimiter.replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&');

    const numbers = input.split(new RegExp(`[${escapedDelimiter}\n]`)).map(Number);

    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negatives not allowed: ${negatives.join(',')}`);
    }

    const validNumbers = numbers.filter(num => num <= 1000);

    const result = validNumbers.reduce((acc, curr) => acc + curr, 0);

    return result;
  }
}

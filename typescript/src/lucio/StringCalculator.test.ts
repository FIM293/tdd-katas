import { StringCalculator } from "./StringCalculator";

describe(StringCalculator, () => {
  it("should return 0 when the input is an empty string", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("");
    expect(result).toEqual(0);
  });
  it("should return the same number inputed if you only input one number", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("1");
    expect(result).toEqual(1);
  });
});

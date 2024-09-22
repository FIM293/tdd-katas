import { StringCalculator } from "./StringCalculator";

describe(StringCalculator, () => {
  it("should return 0 when the input is an empty string", () => {
    const stringCalculator = new StringCalculator();

    const result = stringCalculator.add("");
    expect(result).toEqual(0);
  });
});

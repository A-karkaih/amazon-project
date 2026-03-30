import { formatCurrency } from "../scripts/utils/money.js";

describe("formatCurrency", function () {
  //Test case1
  it("converts cents into dollars", function () {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  // Test case2
  it("works with 0", function () {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  // Test case3
  it("rounds to the nearest cent", function () {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
  //   Test case4
  it("handles values with no decimal places", function () {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});

import { formatCurrency } from "../scripts/utils/money.js";

// Test cases for formatCurrency function (Automated testing)
console.log("test suite: Format Currency function");

//Test case1
console.log("converts cents into dollars");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("failed");
}

//Test case2
console.log("works with 0");
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("failed");
}

// Test case3
console.log("rounds to the nearest cent");
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("failed");
}

// Test case4
console.log("handles values with no decimal places");
if (formatCurrency(2000.4) === "20.00") {
  console.log("passed");
} else {
  console.log("failed");
}

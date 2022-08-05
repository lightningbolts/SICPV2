const { add } = require("../calc.js");

describe("calculate", function () {
  it("add", function () {
    expect(add(1, 2)).toBe(3);
  });
});

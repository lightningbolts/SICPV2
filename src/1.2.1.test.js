const { factorial, factorial_iter, A } = require("./1.2.1");
describe('Code', function () {
  it('Fact/A', function () {
    expect(factorial(5)).toBe(120)
    expect(factorial_iter(1, 5)).toBe(120)
    expect(A(2, 4)).toBe(65536)
  })
})
const { deriv, cube, compose, square, inc } = require("./1.3.4");
describe('Code', function () {
  it('Interval', function () {
    expect(deriv(cube)(5)).toBe(75.00014999664018)
    expect(compose(square, inc)(6)).toBe(49)
  })
})
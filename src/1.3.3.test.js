const { cont_frac } = require("./1.3.3");
describe('Code', function () {
  it('Interval', function () {
    expect(2 + cont_frac(i => 1, i => (i + 1) % 3 < 1 ? 2 * (i + 1) / 3 : 1, 20)).toBe(2.718281828459045)
  })
})
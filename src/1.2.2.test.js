const { fast } = require("./1.2.2");
describe('Code', function () {
  it('Fast', function () {
    expect(fast(2, 2)).toBe(16)
  })
})
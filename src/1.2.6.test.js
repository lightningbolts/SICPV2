const { prime } = require("./1.2.6");
describe('Code', function () {
  it('Interval', function () {
    expect(prime(561, 1000)).toBe(true)
  })
})
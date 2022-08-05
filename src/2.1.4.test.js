const { mul_interval, make_interval } = require("./2.1.4");
describe('Code', function () {
  it('Interval', function () {
    expect(mul_interval(make_interval(1, 2), make_interval(3, 4))).toStrictEqual(make_interval(3, 8))
  })
})
const { add_rat, make_rat, print_rat } = require("./2.1.1");
describe('Code', function () {
  it('Interval', function () {
    expect(print_rat(add_rat(make_rat(1, 3), make_rat(1, 3)))).toBe(print_rat(make_rat(2, 3)))
    expect(print_rat(add_rat(make_rat(1, 2), make_rat(1, 3)))).toBe(print_rat(make_rat(5, 6)))
  })
})
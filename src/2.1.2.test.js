const { add_rat, make_rat, print_rat, area_rect, make_rect, make_segment, make_point } = require("./2.1.2");
describe('Code', function () {
  it('Interval', function () {
    expect(area_rect(make_rect(make_segment(make_point(0, 0), make_point(0, 1)), 1, 1))).toBe(1)
  })
})
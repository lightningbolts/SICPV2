const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, is_undefined, error, set_tail, display } = require("./advanced_primitives")
const { mul, div, add, sub, make_javascript_number, make_polynomial, make_term } = require("./2.5.3")
describe('Code', function () {
  it('Stuff', function () {
    const p1 = make_polynomial("x",
      list(make_term(2, make_javascript_number(4)),
        make_term(1, make_javascript_number(3)),
        make_term(0, make_javascript_number(7))));
    const p2 = make_polynomial("x",
      list(make_term(2, make_javascript_number(5)),
        make_term(1, make_javascript_number(2)),
        make_term(0, make_javascript_number(10))));

    expect(add(p1, p2)).toStrictEqual(make_polynomial("x",
      list(make_term(2, make_javascript_number(9)),
        make_term(1, make_javascript_number(5)),
        make_term(0, make_javascript_number(17)))))
    // expect(sub(p1, p2)).toStrictEqual(make_polynomial("x",
    //   list(make_term(2, make_javascript_number(-1),
    //     make_term(1, make_javascript_number(1)),
    //     make_term(0, make_javascript_number(-3))))))

  })
})
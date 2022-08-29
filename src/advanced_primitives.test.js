const exp = require("constants")
const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, display, set_tail } = require("./advanced_primitives")
describe('Code', function () {
  it('Display', function () {
    expect(display(list(1, 2, 3))).toStrictEqual([1, 2, 3])
    expect(display(list())).toStrictEqual([])
    expect(display(list(1, list(2)))).toStrictEqual([1, [2]])
    const x = list(1, 2)
    set_tail(x, list(3))
    expect(x).toStrictEqual(list(1, 3))
    //expect(set_tail(list(list(1, 2), list(3, 4)), list(5, 6))).toStrictEqual(list(list(1, 2), list(5, 6)))
  })
})
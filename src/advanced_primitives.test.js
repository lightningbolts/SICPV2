const exp = require("constants")
const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, display } = require("./advanced_primitives")
describe('Code', function () {
  it('Display', function () {
    expect(display(list(1, 2, 3))).toStrictEqual([1, 2, 3])
    expect(display(list())).toStrictEqual([])
    expect(display(list(1, list(2)))).toStrictEqual([1, [2]])
  })
})
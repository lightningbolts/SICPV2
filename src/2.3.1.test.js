const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { equal, member } = require("./2.3.1")
describe('Code', function () {
  it('Stuff', function () {
    expect(list("a", "b", "c")).toStrictEqual(list("a", "b", "c"))
    expect(list(list("george"))).toStrictEqual(list(list("george")))
    expect(tail(list(list("x1", "x2"), list("y1", "y2")))).toStrictEqual([["y1", ["y2", null]], null])
    expect(tail(head(list(list("x1", "x2"), list("y1", "y2"))))).toStrictEqual(["x2", null])
    expect(member("red", list("blue", "shoes", "yellow", "socks"))).toStrictEqual(null)
    expect(member("red", list("red", "shoes", "blue", "socks"))).toStrictEqual(["red", ["shoes", ["blue", ["socks", null]]]])
    expect(equal(list("this", "is", "a", "list"), list("this", "is", "a", "list"))).toStrictEqual(true)
    expect(equal(list("this", "is", "a", "list"), list("this", list("is", "a"), "list"))).toStrictEqual(false)
  })
})
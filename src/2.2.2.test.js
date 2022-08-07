const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { fringe, deep_reverse, left_branch, right_branch, branch_length, branch_structure, total_weight, make_branch, make_mobile, is_balanced, square_tree, square_tree1, tree_map, subsets } = require("./2.2.2")
describe('Code', function () {
  it('Pair', function () {
    const z = list(list(1, 2), list(3, 4))
    const x = list(1, 2, 3)
    const y = list(4, 5, 6)

    //console.log(append(x, y))
    //console.log(pair(x, y))
    //console.log(list(x, y))
    //console.log(deep_reverse(z))
    expect(append(x, y)).toStrictEqual(list(1, 2, 3, 4, 5, 6))
    expect(pair(x, y)).toStrictEqual([[1, [2, [3, null]]], [4, [5, [6, null]]]])
    expect(deep_reverse(z)).toStrictEqual(list(list(4, 3), list(2, 1)))
  })
  it('Fringe', function () {
    const z = list(list(1, 2), list(3, 4))
    expect(fringe(null)).toStrictEqual(null)
    expect(fringe(z)).toStrictEqual(list(1, 2, 3, 4))
  })
  it('Mobiles and Branches', function () {
    let b = make_branch(3, 4)
    let a = make_branch(2, 6)
    let m = make_mobile(a, b)
    let b2 = make_branch(4, m)
    let m1 = make_mobile(b, b2)
    expect(left_branch(b2)).toBe(4)
    expect(right_branch(b2)).toStrictEqual(m)
    expect(branch_structure(right_branch(m1))).toStrictEqual(m)
    expect(total_weight(m)).toBe(10)
    expect(is_balanced(m)).toStrictEqual(true)
    expect(is_balanced(m1)).toStrictEqual(false)
  })
  it('Map and Trees', function () {
    expect(square_tree(list(1,
      list(2, list(3, 4), 5),
      list(6, 7)))).toStrictEqual(list(1, list(4, list(9, 16), 25), list(36, 49)))
    expect(square_tree1(list(1,
      list(2, list(3, 4), 5),
      list(6, 7)))).toStrictEqual(list(1, list(4, list(9, 16), 25), list(36, 49)))
    expect(subsets(list(1, 2))).toStrictEqual(list(null, list(2), list(1), list(1, 2)))
    expect(subsets(list(1, 2, 3))).toStrictEqual(
      list(null, list(3), list(2), list(2, 3),
        list(1), list(1, 3), list(1, 2),
        list(1, 2, 3))
    )
  })
})
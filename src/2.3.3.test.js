const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { equal, member } = require("./2.3.1")
const { list_to_tree, tree_to_list_2, intersection_set, intersection_set3, union_set, union_set3, lookup, lookup1, make_tree, make_record, left_branch, right_branch, adjoin_set } = require("./2.3.3")
describe('Code', function () {
  it('Stuff', function () {
    expect(lookup(3, list(make_record(2, "Venus"),
      make_record(5, "Jupiter"),
      make_record(4, "Mars"),
      make_record(3, "Earth"),
      make_record(6, "Saturn")))).toStrictEqual([3, "Earth"])
    const my_fav_planets =
      make_tree(make_record(4, "Mars"),
        make_tree(make_record(2, "Venus"),
          null,
          make_tree(make_record(3, "Earth"),
            null, null)),
        make_tree(make_record(6, "Saturn"),
          make_tree(make_record(5, "Jupiter"),
            null, null),
          null));

    expect(lookup1(3, my_fav_planets)).toStrictEqual([3, "Earth"])
    expect(tree_to_list_2(union_set3(
      list_to_tree(list(1, 3, 5, 7)),
      list_to_tree(list(2, 4, 6, 8))))).toStrictEqual(
        list(1, 2, 3, 4, 5, 6, 7, 8)
      )
    expect(tree_to_list_2(intersection_set3(
      list_to_tree(list(1, 3, 5, 8)),
      list_to_tree(list(2, 3, 6, 8))))).toStrictEqual(
        list(3, 8)
      )
    expect(union_set(
      adjoin_set(10, adjoin_set(20, adjoin_set(30, null))),
      adjoin_set(10, adjoin_set(15, adjoin_set(20, null))))).toStrictEqual(
        list(30, 10, 15, 20)
      )
    expect(intersection_set(
      adjoin_set(10, adjoin_set(20, adjoin_set(30, null))),
      adjoin_set(10, adjoin_set(15, adjoin_set(20, null))))).toStrictEqual(
        list(10, 20)
      )
  })
})
const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { equal, member } = require("./2.3.1")
const { generage_huffman_tree, make_code_tree, make_leaf, encode, decode, adjoin_set } = require("./2.3.4")
describe('Code', function () {
  it('Stuff', function () {
    const rock_tree_frequencies = list(
      list("A", 2),
      list("NA", 16),
      list("BOOM", 1),
      list("SHA", 3),
      list("GET", 2),
      list("YIP", 9),
      list("JOB", 2),
      list("WAH", 2));

    const rock_message_tree = generage_huffman_tree(rock_tree_frequencies)

    const rock_message = list(
      'GET', 'A', 'JOB',
      'SHA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA', 'NA',
      'GET', 'A', 'JOB', 'SHA', 'NA', 'NA', 'NA', 'NA', 'NA',
      'NA', 'NA', 'NA', 'WAH', 'YIP', 'YIP', 'YIP', 'YIP',
      'YIP', 'YIP', 'YIP', 'YIP', 'YIP', 'SHA', 'BOOM'
    );

    //expect(length(encode(rock_message))).toBe(84)

    const sample_tree = make_code_tree(make_leaf("A", 4),
      make_code_tree(make_leaf("B", 2),
        make_code_tree(
          make_leaf("D", 1),
          make_leaf("C", 1))));
    const sample_message = list(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0);

    expect(decode(sample_message, sample_tree)).toStrictEqual(list("A", "D", "A", "B", "B", "C", "A"))
    const my_leaf_1 = make_leaf("A", 8);
    const my_leaf_2 = make_leaf("B", 3);
    const my_tree = make_code_tree(my_leaf_1, my_leaf_2);


    //expect(weight(my_tree)).toBe(11);
  })
})
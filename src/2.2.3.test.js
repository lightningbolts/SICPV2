const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { accumulate, accumulate_n, matrix_times_matrix, matrix_times_vector, dot_product, add, map1, divide, fold_left, horner_eval, filter, is_odd, times, enumerate_tree, unique_pairs } = require("./2.2.3")
describe('Code', function () {
  it('Stuff', function () {
    const a = list(1, 2)
    const b = list(list(1, 2), list(4, 5))
    expect(matrix_times_vector(b, a)).toStrictEqual(list(5, 14))
    expect(accumulate(divide, 1, list(1, 2, 3))).toBe(1.5)
    expect(fold_left(divide, 1, list(1, 2, 3))).toBe(1 / 6)
    expect(accumulate(list, null, list(1, 2, 3))).toStrictEqual(list(1, list(2, list(3, null))))
    expect(fold_left(list, null, list(1, 2, 3))).toStrictEqual(list(list(list(null, 1), 2), 3));
    expect(horner_eval(2, list(1, 3, 0, 5, 0, 1))).toBe(0);
    expect(filter(is_odd, list(1, 2, 3, 4, 5))).toStrictEqual(list(1, 3, 5));
    expect(accumulate(times, 1, list(1, 2, 3, 4, 5))).toBe(120);
    expect(enumerate_tree(list(1, list(2, list(3, 4)), 5))).toStrictEqual(list(1, 2, 3, 4, 5));
    expect(unique_pairs(3)).toStrictEqual(list(list(2, 1), list(3, 1), list(3, 2)))
    expect(reverse(list(1, 2, 3))).toStrictEqual(list(3, 2, 1))
    expect(dot_product(list(1, 2, 3), list(1, 2, 3))).toStrictEqual(14)
  })
})
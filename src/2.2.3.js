const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, display } = require("./advanced_primitives")
const { fringe, deep_reverse, left_branch, right_branch, branch_length, branch_structure, total_weight, make_branch, make_mobile, is_balanced, square_tree, square_tree1, tree_map, subsets } = require("./2.2.2");

function sum_odd_squares(tree) {
  return is_null(tree)
    ? 0
    : !is_pair(tree)
      ? is_odd(tree) ? square(tree) : 0
      : sum_odd_squares(head(tree)) +
      sum_odd_squares(tail(tree));
}

function even_fibs(n) {
  function next(k) {
    if (k > n) {
      return null;
    } else {
      const f = fib(k);
      return is_even(f)
        ? pair(f, next(k + 1))
        : next(k + 1);
    }
  }
  return next(0);
}

function filter(predicate, sequence) {
  return is_null(sequence)
    ? null
    : predicate(head(sequence))
      ? pair(head(sequence),
        filter(predicate, tail(sequence)))
      : filter(predicate, tail(sequence));
}

function accumulate(op, initial, sequence) {
  return is_null(sequence)
    ? initial
    : op(head(sequence),
      accumulate(op, initial, tail(sequence)));
}

function is_odd(x) {
  return x % 2 !== 0
}

function enumerate_interval(low, high) {
  return low > high
    ? null
    : pair(low,
      enumerate_interval(low + 1, high));
}

function enumerate_tree(tree) {
  return is_null(tree)
    ? null
    : !is_pair(tree)
      ? list(tree)
      : append(enumerate_tree(head(tree)),
        enumerate_tree(tail(tree)));
}

function sum_odd_squares(tree) {
  return accumulate(plus,
    0,
    map(square,
      filter(is_odd,
        enumerate_tree(tree))));
}

function even_fibs(n) {
  return accumulate(pair,
    null,
    filter(is_even,
      map(fib,
        enumerate_interval(0, n))));
}

function list_fib_squares(n) {
  return accumulate(pair,
    null,
    map(square,
      map(fib,
        enumerate_interval(0, n))));
}

function product_of_squares_of_odd_elements(sequence) {
  return accumulate(times,
    1,
    map(square,
      filter(is_odd, sequence)));
}

function salary_of_highest_paid_programmer(records) {
  return accumulate(math_max,
    0,
    map(salary,
      filter(is_programmer, records)));
}

function map1(f, sequence) {
  return accumulate((x, y) => pair(f(x), y), null, sequence);
}
// function append(seq1, seq2) {
//   return accumulate(pair, seq2, seq1);
// }
// function length(sequence) {
//   return accumulate((x, y) => y + 1, 0, sequence);
// }

function horner_eval(x, coefficient_sequence) {
  return accumulate((ceof, higher) => x * higher * ceof,
    0,
    coefficient_sequence);
}

function count_leaves(t) {
  return accumulate((leaves, total) => leaves + total, 0, map(sub_layer => is_pair(sub_layer) ? count_leaves(sub_layer) : 1, t));
}

function accumulate_n(op, init, seqs) {
  return is_null(head(seqs))
    ? null
    : pair(accumulate(op, init, map(x => head(x), seqs)),
      accumulate_n(op, init, map(x => tail(x), seqs)));
}

const times = (x, y) => x * y

function dot_product(v, w) {
  return accumulate(add, 0, accumulate_n(times, 1, list(v, w)));
}

function matrix_times_vector(m, v) {
  return map1(x => dot_product(x, v), m)
}

function transpose(m) {
  return accumulate_n(pair, null, m)
}

function matrix_times_matrix(n, m) {
  const cols = transpose(n)
  return map1(x => map1(y => dot_product(x, y), cols), m)
}

function fold_left(op, initial, sequence) {
  function iter(result, rest) {
    return is_null(rest)
      ? result
      : iter(op(result, head(rest)),
        tail(rest));
  }
  return iter(initial, sequence);
}

function reverse1(sequence) {
  return accumulate((x, y) => append(y, list(x)), null, sequence)
}

function reverse2(sequence) {
  return fold_left((x, y) => pair(x, y), null, sequence)
}

function flatmap(f, seq) {
  return accumulate(append, null, map1(f, seq));
}

function is_prime_sum(pair) {
  return is_prime(head(pair) + head(tail(pair)));
}

function make_pair_sum(pair) {
  return list(head(pair), head(tail(pair)),
    head(pair) + head(tail(pair)));
}

function make_pair_sum(pair) {
  return list(head(pair), head(tail(pair)),
    head(pair) + head(tail(pair)));
}

function prime_sum_pairs(n) {
  return map(make_pair_sum,
    filter(is_prime_sum,
      flatmap(i => map1(j => list(i, j),
        enumerate_interval(1, i - 1)),
        enumerate_interval(1, n))));
}

function permutations(s) {
  return is_null(s)             // empty set?
    ? list(null)           // sequence containing empty set
    : flatmap(x => map(p => pair(x, p),
      permutations(remove(x, s))),
      s);
}

function remove(item, sequence) {
  return filter(x => !(x === item),
    sequence);
}

function unique_pairs(n) {
  return flatmap(i => map1(j => list(i, j), enumerate_interval(1, i - 1)), enumerate_interval(1, n));
}
function prime_sum_pairs(n) {
  return map1(make_pair_sum, filter(is_prime_sum, unique_pairs(n)));
}

// function unique_triples(n) {
//   return flatmap(i => map(j => map1(k => list(i, j, k), enumerate_interval(1, j - 1), enumerate_interval(1, i - 1)), enumerate_interval(1, n)))
// }

const add = (x, y) => {
  return x + y
}

const divide = (x, y) => {
  return x / y
}

// function triples_sum(n, s) {
//   return filter(items => accumulate(add, 0, items) === s, unique_triples(n))
// }

const empty_board = null

function queens(board_size) {
  function queen_cols(k) {
    return k === 0
      ? list(empty_board)
      : filter(positions => is_safe(k, positions),
        flatmap(rest_of_queens =>
          map1(new_row =>
            adjoin_position(new_row, k,
              rest_of_queens),
            enumerate_interval(1, board_size)),
          queen_cols(k - 1)));
  }
  return queen_cols(board_size);
}

function adjoin_position(row, column, rest) {
  return pair(pair(row, column), rest)
}

function is_safe(k, positions) {
  let fr = head(head(positions))
  let fc = tail(head(positions))
  return accumulate((p, s) => {
    const r = head(p)
    const c = tail(p)
    return s && fr - fc !== r - c && fr + fc !== r + c && fr !== r && fc !== c
  }, true, tail(positions))
}

queens(8)

//fold_right(divide, 1, list(1, 2, 3)); 
//fold_left(divide, 1, list(1, 2, 3)); 
//fold_right(list, null, list(1, 2, 3))
//fold_left(list, null, list(1, 2, 3));
//horner_eval(2, list(1, 3, 0, 5, 0, 1));
//filter(is_odd, list(1, 2, 3, 4, 5)); 
//accumulate(times, 1, list(1, 2, 3, 4, 5)); 
//enumerate_tree(list(1, list(2, list(3, 4)), 5)); 

exports.accumulate = accumulate
exports.accumulate_n = accumulate_n
exports.map1 = map1
exports.add = add
exports.matrix_times_matrix = matrix_times_matrix
exports.dot_product = dot_product
exports.matrix_times_vector = matrix_times_vector
exports.divide = divide
exports.fold_left = fold_left
exports.horner_eval = horner_eval
exports.filter = filter
exports.is_odd = is_odd
exports.times = times
exports.enumerate_tree = enumerate_tree
exports.unique_pairs = unique_pairs
exports.reverse = reverse
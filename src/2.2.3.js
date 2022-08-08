const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
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

function map(f, sequence) {
  return accumulate((x, y) => pair(f(x), y), null, sequence);
}
function append(seq1, seq2) {
  return accumulate(pair, seq2, seq1);
}
function length(sequence) {
  return accumulate((x, y) => y + 1, 0, sequence);
}

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

function dot_product(v, w) {
  return accumulate(plus, 0, accumulate_n(times, 1, list(v, w)));
}

function matrix_times_vector(m, v) {
  return map(x => dot_product(x, v), m)
}

function transpose(m) {
  return accumulate_n(pair, null, m)
}

function matrix_times_matrix(n, m) {
  const cols = transpose(n)
  return map(x => map(y => dot_product(x, y), cols), m)
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
  return accumulate(append, null, map(f, seq));
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
      flatmap(i => map(j => list(i, j),
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

function unique_pairs()

//fold_right(divide, 1, list(1, 2, 3)); 
//fold_left(divide, 1, list(1, 2, 3)); 
//fold_right(list, null, list(1, 2, 3))
//fold_left(list, null, list(1, 2, 3));
//horner_eval(2, list(1, 3, 0, 5, 0, 1));
//filter(is_odd, list(1, 2, 3, 4, 5)); 
//accumulate(times, 1, list(1, 2, 3, 4, 5)); 
//enumerate_tree(list(1, list(2, list(3, 4)), 5)); 
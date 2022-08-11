const { reverse, is_null, pair, append, list, head, tail, length, display } = require("./advanced_primitives");
const { equal, member } = require("./2.3.1")

function make_leaf(symbol, weight) {
  return list("leaf", symbol, weight);
}
function is_leaf(object) {
  return head(object) === "leaf";
}
function symbol_leaf(x) { return head(tail(x)); }

function weight_leaf(x) { return head(tail(tail(x))); }

function make_code_tree(left, right) {
  return list("code_tree", left, right,
    append(symbols(left), symbols(right)),
    weight(left) + weight(right));
}

function left_branch(tree) { return head(tail(tree)); }

function right_branch(tree) { return head(tail(tail(tree))); }

function symbols(tree) {
  return is_leaf(tree)
    ? list(symbol_leaf(tree))
    : head(tail(tail(tail(tree))));
}
function weight(tree) {
  return is_leaf(tree)
    ? weight_leaf(tree)
    : head(tail(tail(tail(tail(tree)))));
}

function decode(bits, tree) {
  function decode_1(bits, current_branch) {
    if (is_null(bits)) {
      return null;
    } else {
      const next_branch = choose_branch(head(bits),
        current_branch);
      return is_leaf(next_branch)
        ? pair(symbol_leaf(next_branch),
          decode_1(tail(bits), tree))
        : decode_1(tail(bits), next_branch);
    }
  }
  return decode_1(bits, tree);
}

function choose_branch(bit, branch) {
  return bit === 0
    ? left_branch(branch)
    : bit === 1
      ? right_branch(branch)
      : error(bit, "bad bit -- choose_branch");
}

function adjoin_set(x, set) {
  return is_null(set)
    ? list(x)
    : weight(x) < weight(head(set))
      ? pair(x, set)
      : pair(head(set), adjoin_set(x, tail(set)));
}

function make_leaf_set(pairs) {
  if (is_null(pairs)) {
    return null;
  } else {
    const first_pair = head(pairs);
    return adjoin_set(
      make_leaf(head(first_pair),        // symbol
        head(tail(first_pair))), // frequency
      make_leaf_set(tail(pairs)));
  }
}

function encode(message, tree) {
  return is_null(message)
    ? null
    : append(encode_symbol(head(message), tree),
      encode(tail(message), tree));
}

function encode_symbol(symbol, tree) {
  function symbol_in_tree(symbol, ctree) {
    return !is_null(member(symbol, symbols(ctree)))
  }
  if (is_leaf(tree)) {
    return null
  } else {
    const lt = left_branch(tree)
    const rt = right_branch(tree)
    if (symbol_in_tree(symbol, lt)) {
      return pair(0, encode_symbol(symbol, rt))
    } else if (symbol_in_tree(symbol, rt)) {
      return pair(1, encode_symbol(symbol, rt))
    } else {
      return "symbol not found"
    }
  }
}

function generage_huffman_tree(pairs) {
  return succesive_merge(make_leaf_set(pairs))
}

function succesive_merge(leaves) {
  if (length(leaves) === 1) {
    return head(leaves)
  } else {
    succesive_merge(adjoin_set(make_code_tree(head(leaves), head(tail(leaves))), tail(tail(leaves))))
  }
}

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

const sample_tree = make_code_tree(make_leaf("A", 4),
  make_code_tree(make_leaf("B", 2),
    make_code_tree(
      make_leaf("D", 1),
      make_leaf("C", 1))));
const sample_message = list(0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0);

//console.log(display(decode(sample_message, sample_tree)))
const my_leaf_1 = make_leaf("A", 8);
const my_leaf_2 = make_leaf("B", 3);
const my_tree = make_code_tree(my_leaf_1, my_leaf_2);


//weight(my_tree) = 11;

exports.adjoin_set = adjoin_set
exports.decode = decode
exports.encode = encode
exports.make_code_tree = make_code_tree
exports.make_leaf = make_leaf
exports.generage_huffman_tree = generage_huffman_tree
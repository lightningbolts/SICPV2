const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")

function count_leaves(x) {
  if (is_null(x)) {
    return 0
  } else if (!is_pair(x)) {
    return 1
  } else {
    return count_leaves(head(x)) + count_leaves(tail(x))
  }
}

function deep_reverse(items) {
  if (is_null(items)) {
    return null
  } else if (is_pair(items)) {
    return append(deep_reverse(tail(items)), pair(deep_reverse(head(items)), null))
  } else {
    return items
  }
}

function fringe(items) {
  if (is_null(items)) {
    return null
  } else if (!is_pair(items)) {
    return list(items)
  } else {
    return append(fringe(head(items)), fringe(tail(items)))
  }
}

function make_mobile(left, right) {
  return list(left, right)
}

function make_branch(length, structure) {
  return list(length, structure)
}

function left_branch(m) {
  return head(m)
}

function right_branch(m) {
  return head(tail(m))
}

function branch_length(b) {
  return head(b)
}

function branch_structure(b) {
  return head(tail(b))
}

function is_number(s) {
  return typeof s === "number"
}

function total_weight(m) {
  if (is_null(m)) {
    return 0
  } else if (is_number(m)) {
    return m
  } else {
    let l = left_branch(m)
    let r = right_branch(m)
    return total_weight(branch_structure(l)) + total_weight(branch_structure(r))
  }
}

function is_balanced(m) {
  if (is_null(m)) {
    return true
  } else if (is_number(m)) {
    return true
  } else {
    let l = left_branch(m)
    let r = right_branch(m)
    let sl = branch_structure(l)
    let sr = branch_structure(r)
    let ll = branch_length(l)
    let lr = branch_length(r)
    return total_weight(sl) * ll === total_weight(sr) * lr
      && is_balanced(sl) && is_balanced(sr)
  }
}

function scale_tree(tree, factor) {
  return is_null(tree)
    ? null
    : !is_pair(tree)
      ? tree * factor
      : pair(scale_tree(head(tree), factor),
        scale_tree(tail(tree), factor));
}

function scale_tree1(tree, factor) {
  return map(sub_tree => is_pair(sub_tree)
    ? scale_tree1(sub_tree, factor)
    : sub_tree * factor,
    tree);
}

const square = x => x ** 2

function square_tree(tree) {
  return map(sub_tree => is_pair(sub_tree) ? square_tree(sub_tree, square(sub_tree)) :
    square(sub_tree), tree)
}

function square_tree1(tree) { return tree_map(tree, square); }

function tree_map(tree, fun) {
  return map(sub_tree => is_pair(sub_tree)
    ? tree_map(sub_tree, fun)
    : fun(sub_tree), tree)
}

function subsets(s) {
  if (is_null(s)) {
    return list(null);
  } else {
    const rest = subsets(tail(s));
    return append(rest, map(x => append(list(head(s)), x), rest));
  }
}

const z = pair(list(1, 2), list(3, 4))
const x = list(1, 2, 3)
const y = list(4, 5, 6)

// console.log(append(x, y))
// console.log(pair(x, y))
// console.log(list(x, y))
console.log(deep_reverse(z))

// const x = pair(list(1, 2,), list(3, 4))
// console.log(x)
// console.log(length(x))
// console.log(count_leaves(x))

exports.fringe = fringe
exports.deep_reverse = deep_reverse

exports.left_branch = left_branch
exports.right_branch = right_branch
exports.branch_length = branch_length
exports.branch_structure = branch_structure
exports.total_weight = total_weight
exports.make_branch = make_branch
exports.make_mobile = make_mobile
exports.is_balanced = is_balanced
exports.square_tree = square_tree
exports.square_tree1 = square_tree1
exports.tree_map = tree_map
exports.subsets = subsets
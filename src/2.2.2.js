const { pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")

function count_leaves(x) {
  if (is_null(x)) {
    return 0
  } else if (!is_pair(x)) {
    return 1
  } else {
    count_leaves(head(x) + count_leaves(tail(x)))
  }
}
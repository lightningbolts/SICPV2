const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, display } = require("./advanced_primitives")

function member(item, x) {
  if (is_null(x)) {
    return null
  } else if (item === head(x)) {
    return x
  } else {
    return member(item, tail(x))
  }
}

function equal(l1, l2) {
  if (is_pair(l1)) {
    return is_pair(l1) && equal(head(l1), head(l2)) && equal(tail(l1), tail(l2))
  } else {
    return l1 === l2
  }
}

exports.member = member
exports.equal = equal
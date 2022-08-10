const { reverse, is_null, pair, append, list, head, tail, length } = require("./advanced_primitives");
const { equal, member } = require("./2.3.1")

function is_element_of_set(x, set) {
  return is_null(set)
    ? false
    : equal(x, head(set))
      ? true
      : is_element_of_set(x, tail(set));
}
function adjoin_set(x, set) {
  return is_element_of_set(x, set)
    ? set
    : pair(x, set);
}
function intersection_set(set1, set2) {
  return is_null(set1) || is_null(set2)
    ? null
    : is_element_of_set(head(set1), set2)
      ? pair(head(set1), intersection_set(tail(set1), set2))
      : intersection_set(tail(set1), set2);
}

function union_set(set1, set2) {
  if (is_null(set1)) {
    return set2
  } else if (is_null(set2)) {
    return set1
  } else {
    return adjoin_set(head(set1), union_set(tail(set1), set2))
  }
}

function adjoin_set1(x, set) {
  return pair(x, set)
}

function union_set1(set1, set2) {
  return append(set1, set2)
}

function is_element_of_set2(x, set) {
  return is_null(set)
    ? false
    : x === head(set)
      ? true
      : x < head(set)
        ? false
        : // \texttt{x > head(set)}x > head(set)
        is_element_of_set2(x, tail(set));
}

function intersection_set2(set1, set2) {
  if (is_null(set1) || is_null(set2)) {
    return null;
  } else {
    const x1 = head(set1);
    const x2 = head(set2);
    return x1 === x2
      ? pair(x1, intersection_set2(tail(set1), tail(set2)))
      : x1 < x2
        ? intersection_set2(tail(set1), set2)
        : // \texttt{x2 < x1}x2 < x1
        intersection_set2(set1, tail(set2));
  }
}

function adjoin_set2(x, set) {
  if (is_null(set)) {
    return list(x)
  } else if (x === head(set)) {
    return set
  } else if (x < head(set)) {
    return pair(x, set)
  } else {
    return pair(head(set), adjoin_set2(x, tail(set)))
  }
}

function union_set2(set1, set2) {
  if (is_null(set1)) {
    return set2
  } else if (is_null(set2)) {
    return set1
  } else {
    if (head(set1) === head(set2)) {
      return pair(x1, union_set2(tail(set1), tail(set2)))
    } else if (head(set1) < head(set2)) {
      return pair(head(set1), union_set2(tail(set1), set2))
    } else {
      return pair(head(set2), union_set2(set1, tail(set2)))
    }
  }
}

function entry(tree) { return head(tree); }

function left_branch(tree) { return head(tail(tree)); }

function right_branch(tree) { return head(tail(tail(tree))); }

function make_tree(entry, left, right) {
  return list(entry, left, right);
}


function is_element_of_set3(x, set) {
  return is_null(set)
    ? false
    : x === entry(set)
      ? true
      : x < entry(set)
        ? is_element_of_set3(x, left_branch(set))
        : // \texttt{x > entry(set)}x > entry(set)
        is_element_of_set3(x, right_branch(set));
}
function adjoin_set3(x, set) {
  return is_null(set)
    ? make_tree(x, null, null)
    : x === entry(set)
      ? set
      : x < entry(set)
        ? make_tree(entry(set),
          adjoin_set3(x, left_branch(set)),
          right_branch(set))
        : // \texttt{x > entry(set)}x > entry(set)
        make_tree(entry(set),
          left_branch(set),
          adjoin_set3(x, right_branch(set)));
}

function tree_to_list_2(tree) {
  function copy_to_list(tree, result_list) {
    return is_null(tree)
      ? result_list
      : copy_to_list(left_branch(tree),
        pair(entry(tree),
          copy_to_list(right_branch(tree),
            result_list)));
  }
  return copy_to_list(tree, null);
}

function list_to_tree(elements) {
  return head(partial_tree(elements, length(elements)));
}
function partial_tree(elts, n) {
  if (n === 0) {
    return pair(null, elts);
  } else {
    const left_size = Math.floor((n - 1) / 2);
    const left_result = partial_tree(elts, left_size);
    const left_tree = head(left_result);
    const non_left_elts = tail(left_result);
    const right_size = n - (left_size + 1);
    const this_entry = head(non_left_elts);
    const right_result = partial_tree(tail(non_left_elts), right_size);
    const right_tree = head(right_result);
    const remaining_elts = tail(right_result);
    return pair(make_tree(this_entry, left_tree, right_tree),
      remaining_elts);
  }
}

function union_set3(set1, set2) {
  return list_to_tree(union_set2(tree_to_list_2(set1), tree_to_list_2(set2)))
}

function intersection_set3(set1, set2) {
  return list_to_tree(intersection_set2(tree_to_list_2(set1), tree_to_list_2(set2)))
}

function lookup(given_key, set_of_records) {
  return is_null(set_of_records)
    ? false
    : equal(given_key, key(head(set_of_records)))
      ? head(set_of_records)
      : lookup(given_key, tail(set_of_records));
}

function make_record(key, data) {
  return pair(key, data)
}

function key(record) {
  return head(record)
}

function data(record) {
  return tail(record)
}

function lookup1(given_key, tree_of_records) {
  if (is_null(tree_of_records)) {
    return null
  } else {
    if (given_key === key(entry(tree_of_records))) {
      return entry(tree_of_records)
    } else if (given_key < key(entry(tree_of_records))) {
      return lookup1(given_key, left_branch(tree_of_records))
    } else {
      return lookup1(given_key, right_branch(tree_of_records))
    }
  }
}

exports.intersection_set = intersection_set
exports.intersection_set3 = intersection_set3
exports.union_set = union_set
exports.union_set3 = union_set3
exports.lookup = lookup
exports.lookup1 = lookup1
exports.list_to_tree = list_to_tree
exports.tree_to_list_2 = tree_to_list_2
exports.make_record = make_record
exports.make_tree = make_tree
exports.left_branch = left_branch
exports.right_branch = right_branch
exports.adjoin_set = adjoin_set
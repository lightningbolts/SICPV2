function pair(x, y) {
  return [x, y]
}
function head(list) {
  return list[0]
}
function tail(list) {
  return list[1]
}

function list(...args) {
  if (args.length === 0) {
    return null
  } else {
    let first = args.shift()
    return pair(first, list(...args))
  }
}

function list_ref(items, n) {
  if (n === 0) {
    return head(items)
  } else {
    return list_ref(tail(items), n - 1)
  }
}

function is_null(list) {
  return list === null
}

function length(items, count = 0) {
  if (is_null(items)) {
    return count
  } else {
    return length(tail(items), count + 1)
  }
}

function append(list1, list2) {
  if (is_null(list1)) {
    return list2
  } else {
    return pair(head(list1), append(tail(list1), list2))
  }
}

function last_pair(items) {
  if (is_null(tail(items))) {
    return items
  } else {
    return last_pair(tail(items))
  }
}

function reverse(items) {
  if (is_null(items)) {
    return null
  } else {
    return append(reverse(tail(items)), pair(head(items), null))
  }
}

function cc(amount, coin_values) {
  return amount === 0
    ? 1
    : amount < 0 || no_more(coin_values)
      ? 0
      : cc(amount, except_first_denomination(coin_values)) +
      cc(amount - first_denomination(coin_values), coin_values);
}

function first_denomination(coin_values) {
  return head(coin_values)
}

function except_first_denomination(coin_values) {
  return tail(coin_values)
}

function no_more(coin_values) {
  return is_null(coin_values)
}

function plus_curried(x) {
  return y => x + y
}

function brooks(f, items) {
  if (is_null(items)) {
    return f
  } else {
    return brooks(f(head(items)), tail(items))
  }
}

function brooks_curried(items) {
  return brooks(head(items), tail(items))
}

function scale_list(items, factor) {
  if (is_null(items)) {
    return null
  } else {
    return pair(head(items) * factor, scale_list(tail(items), factor))
  }
}

function map(fun, items) {
  if (is_null(items)) {
    return null
  } else {
    return pair(fun(head(items)), map(fun, tail(items)))
  }
}

function new_scale_list(items, factor) {
  return map(x => x * factor, items)
}

const square = x => x ** 2

function square_list(items) {
  if (is_null(items)) {
    return null
  } else {
    return pair(square(head(items)), square_list(tail(items)))
  }
}

function square_list(items) {
  return map(square, items)
}

function for_each(fun, items) {
  if (is_null(items)) {
    return null
  } else {
    fun(head(items))
    for_each(fun, tail(items))
  }
}

console.log(for_each(x => console.log(x), list(57, 321, 88)))
console.log(map(x => x * x, list(1, 2, 3, 4)))
console.log(brooks_curried(list(brooks_curried,
  list(plus_curried, 3, 4))))

const odds = list(1, 3, 5, 7)
const squares = list(1, 4, 9, 16, 25)
console.log(list_ref(squares, 3))
console.log(length(odds))

//console.log(list(1, 2, 3))
//const alist = list(1, 2, 4);
//console.log(head(alist));
//console.log(tail(alist));
//console.log(head(tail(alist)));
exports.pair = pair
exports.head = head
exports.tail = tail
exports.list = list
exports.length = length
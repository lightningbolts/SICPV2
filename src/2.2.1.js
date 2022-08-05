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

console.log(list(1, 2, 3))
const alist = list(1, 2, 4);
console.log(head(alist));
console.log(tail(alist));
console.log(head(tail(alist)));
exports.pair = pair
exports.head = head
exports.tail = tail
exports.list = list
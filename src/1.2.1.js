function factorial(n) {
  if (n <= 1) {
    return n
  } else {
    return n * factorial(n - 1)
  }
}

function factorial_iter(n, count) {
  if (count <= 1) {
    return n
  } else {
    return factorial_iter(n * count, count - 1)
  }
}

function A(x, y) {
  return y === 0
    ? 0
    : x === 0
      ? 2 * y
      : y === 1
        ? 2
        : A(x - 1, A(x, y - 1));
}

//console.log(factorial(1, 8))
//console.log(A(1, 5))

exports.factorial = factorial
exports.factorial_iter = factorial_iter
exports.A = A
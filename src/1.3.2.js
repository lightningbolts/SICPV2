function f(x, y) {
  function f_helper(a, b) {
    return x * a ** 2 + y * b + a * b
  }
  return f_helper(1 + x * y, 1 - y)
}

function f_2(x, y) {
  return ((a, b) => x * a ** 2 + y * b + a * b)(1 + x * y, 1 - y)
}

function f1(g) {
  return g(2)
}

f1(x => x ** 2)

exports.f = f
exports.f_2 = f_2
exports.f1 = f1
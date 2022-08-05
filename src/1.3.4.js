const { search, close_enough, half_interval_method, fixed_point, fixed_point_wad } = require("./1.3.3");

const tolerance = 0.00001

const dx = 0.00001

function average_damp(f) {
  return x => (x + f(x)) / 2
}

function sqrt(x) {
  return fixed_point(average_damp(y => x / y), 1)
}

function cqrt(x) {
  return fixed_point(average_damp(y => x / y ** 2), 1)
}

function deriv(g) {
  return x => (g(x + dx) - g(x)) / dx
}

const cube = x => x ** 3
const square = x => x ** 2

console.log(deriv(cube)(5))

function newton_transform(g) {
  return x => x - g(x) / deriv(g)(x)
}

function newtons_method(g, guess) {
  return fixed_point(newton_transform(g), guess)
}

function sqrt1(x) {
  return newtons_method(y => y ** 2 - x, 1)
}

function fixed_point_of_transform(g, transform, guess) {
  return fixed_point(transform(g), guess)
}

function cubic(a, b, c) {
  return x => cube(x) + a * x ** 2 + b * x + c
}

const double = f => x => f(f(x))

function compose(f, g) {
  return x => f(g(x))
}

function repeated(f, n) {
  if (n === 0) {
    return x => x
  } else {
    return compose(f, repeated(f, n - 1))
  }
}

function smooth(f) {
  return x => (f(x - dx) + f(x) + f(x + dx)) / 3
}

function n_fold_smooth(f, n) {
  return repeated(smooth, n)(f)
}

function nth_root(n, x) {
  return fixed_point(repeated(average_damp, Math.floor(Math.log2(n)))(y => x / y ** (n - 1)), 1)
}

function iterative_improve(ge, imp) {
  return guess => is_good_enough(guess) ? guess : iterative(improve(guess))
}

const inc = x => x + 1

exports.deriv = deriv
exports.cube = cube
exports.compose = compose
exports.inc = inc
exports.square = square
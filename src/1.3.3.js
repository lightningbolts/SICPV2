const tolerance = 0.00001

function search(f, neg_point, pos_point) {
  const midpoint = (neg_point + pos_point) / 2
  if (close_enough(neg_point, pos_point)) {
    return midpoint
  } else {
    const test_value = f(midpoint)
    if (test_value > 0) {
      return search(f, neg_point, midpoint)
    } else if (test_value < 0) {
      return search(f, midpoint, pos_point)
    } else {
      return midpoint
    }
  }
}

function half_interval_method(f, a, b) {
  const a_value = f(a)
  const b_value = f(b)
  if (a_value < 0 && b_value > 0) {
    return search(f, a, b)
  } else {
    if (b_value < 0 && a_value > 0) {
      return search(f, b, a)
    } else {
      return "values are not of opposite sign"
    }
  }
}

function close_enough(x, y) {
  return Math.abs(x - y) < tolerance
}

function fixed_point(f, first_guess) {
  function try_with(guess) {
    const next = f(guess)
    if (close_enough(guess, next)) {
      return next
    } else {
      try_with(next)
    }
  }
  return try_with(first_guess)
}

function fixed_point_wad(f, first_guess) {
  function try_with(guess) {
    const next = (guess + f(guess)) / 2
    if (close_enough(guess, next)) {
      return next
    } else {
      return try_with(next)
    }
  }
  return try_with(first_guess)
}

function cont_frac(n, d, k) {
  function fraction(i) {
    if (i > k) {
      return 0
    } else {
      return n(i) / (d(i) + fraction(i + 1))
    }
  }
  return fraction(1)
}

console.log(2 + cont_frac(i => 1, i => (i + 1) % 3 < 1 ? 2 * (i + 1) / 3 : 1, 20))


function tan_cf(x, k) {
  return cont_frac(i => i === 1 ? x : -1 * x * x, i => 2 * i - 1, k)
}

exports.cont_frac = cont_frac
exports.search = search
exports.close_enough = close_enough
exports.half_interval_method = half_interval_method
exports.fixed_point = fixed_point
exports.fixed_point_wad = fixed_point_wad

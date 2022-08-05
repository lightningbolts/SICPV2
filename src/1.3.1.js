function sum_integers(a, b) {
  if (a > b) {
    return 0
  } else {
    return a + sum_integers(a + 1, b)
  }
}

function sum_cubes(a, b) {
  if (a > b) {
    return 0
  } else {
    return a ** 3 + sum_cubes(a + 1, b)
  }
}

function pi_sum(a, b) {
  if (a > b) {
    return 0
  } else {
    return 1 / (a * (a + 2)) + pi_sum(a + 4, b)
  }
}

function sum(term, a, next, b) {
  if (a > b) {
    return 0
  } else {
    return term(a) + sum(term, next(a), next, b)
  }
}

function integral(f, a, b, dx) {
  function add_dx(x) {
    return x + dx
  }
  return sum(f, a + dx / 2, add_dx, b) * dx
}


function simpson(f, a, b, n) {
  function help(h) {
    function y(k) {
      return f(k * h + a)
    }
    function term(k) {
      if (k === 0 || k === n) {
        return y(k)
      } else {
        if (k % 2 === 0) {
          return 2 * y(k)
        } else {
          return 4 * y(k)
        }
      }
    }
    return sum(term, 0, inc, n) * (h / 3)
  }
  return help((b - a) / n)
}

function sum(term, a, next, b) {
  function iter(a, result) {
    if (a > b) {
      return result
    } else {
      return iter(next(a), result + term(a))
    }
  }
  return iter(a, 0)
}

function product(term, a, next, b) {
  if (a > b) {
    return 1
  } else {
    return term(a) * product(term, next(a), next, b)
  }
}

function product_iter(term, a, next, b) {
  function iter(a, result) {
    if (a > b) {
      return result
    } else {
      return iter(next(a), term(a) * result)
    }
  }
  return iter(a, 1)
}

function accumulate(combiner, null_value, term, a, next, b) {
  if (a > b) {
    return null_value
  } else {
    return combiner(term(a), accumulate(combiner, null_value, term, next(a), next, b))
  }
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
  function iter(a, result) {
    if (a > b) {
      return result
    } else {
      return iter(next(a), combiner(term(a), result))
    }
  }
  return iter(a, null_value)
}

function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
  if (a > b) {
    return null_value
  } else {
    if (filter(a)) {
      return combiner(term(a), filtered_accumulate(combiner, null_value, term, next(a), next, b, filter))
    } else {
      return filtered_accumulate(combiner, null_value, term, next(a), next, b, filter)
    }
  }
}

exports.sum_integers = sum_integers
exports.sum_cubes = sum_cubes
exports.pi_sum = pi_sum
exports.accumulate = accumulate
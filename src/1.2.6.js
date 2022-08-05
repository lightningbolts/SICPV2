function smallest_divisor(n) {
  return find_divisor(n, 2)
}

function is_even(n) {
  return n % 2 === 0
}

function find_divisor(n, test_divisor) {
  if (test_divisor ** 2 > n) {
    return n
  } else {
    if (divides(test_divisor, n)) {
      return test_divisor
    } else {
      find_divisor(n, next(test_divisor))
    }
  }
}

function divides(a, b) {
  return b % a === 0
}

function expmod(base, exp, m) {
  if (exp === 0) {
    return 1
  } else {
    if (is_even(exp)) {
      return (expmod(base, exp / 2, m) ** 2) % m
    } else {
      return base * expmod(base, exp - 1, m) % m
    }
  }
}

function fermat_test(n) {
  function try_it(a) {
    return expmod(a, n, n) === a
  }
  return try_it(1 + Math.floor(Math.random() * (n - 1)))
}

function prime(n, times) {
  if (times === 0) {
    return true
  } else if (fermat_test(n)) {
    return prime(n, times - 1)
  }
  return false
}

function next(input) {
  if (input === 2) {
    return 3
  } else {
    return input + 2
  }
}

function random(n) {
  return math_floor(math_random() * n);
}
function miller_rabin_test(n) {
  function expmod(base, exp, m) {
    return exp === 0
      ? 1
      : is_even(exp)
        ? square(trivial_test(expmod(base,
          exp / 2,
          m),
          m))
        % m
        : (base * expmod(base, exp - 1, m))
        % m;
  }
  function trivial_test(r, m) {
    return r === 1 || r === m - 1
      ? r
      : square(r) % m === 1
        ? 0
        : r;
  }
  function try_it(a) {
    return expmod(a, n - 1, n) === 1;
  }
  return try_it(1 + random(n - 1));
}
function do_miller_rabin_test(n, times) {
  return times === 0
    ? true
    : miller_rabin_test(n)
      ? do_miller_rabin_test(n, times - 1)
      : false;
}

exports.prime = prime
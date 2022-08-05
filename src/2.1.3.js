function pair(x, y) {
  function dispatch(m) {
    return m === 0
      ? x
      : m === 1
        ? y
        : console.log(m, "argument not 0 or 1 -- pair");
  }
  return dispatch;
}
function head(z) {
  return z(0);
}

function tail(z) {
  return z(1);
}

function pair1(x, y) {
  return m => m(x, y);
}
function head1(z) {
  return z((p, q) => p);
}
function tail1(z) {
  return z((p, q) => q)
}

function pair2(a, b) {
  return 2 ** a * 3 ** b
}
function head2(c) {
  if (c % 2 === 0) {
    return head2(c / 2) + 1
  } else {
    return 0
  }
}

function tail2(c) {
  if (c % 3 === 0) {
    return tail2(c / 3) + 1
  } else {
    return 0
  }
}

const zero = f => x => x

const add_1 = n => f => x => f(n(f)(x))

const one = f => x => f(x)

const two = f => x => f(f(x))

const num = n => n(n => n + 1)(0)

function church(c) {
  return c(n => n + 1)(0)
}

exports.church = church
exports.zero = zero
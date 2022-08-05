function gcd(a, b) {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}
function add_rat(x, y) {
  return make_rat(numer(x) * denom(y) + numer(y) * denom(x),
    denom(x) * denom(y));
}
function sub_rat(x, y) {
  return make_rat(numer(x) * denom(y) - numer(y) * denom(x),
    denom(x) * denom(y));
}
function mul_rat(x, y) {
  return make_rat(numer(x) * numer(y),
    denom(x) * denom(y));
}
function div_rat(x, y) {
  return make_rat(numer(x) * denom(y),
    denom(x) * numer(y));
}
function equal_rat(x, y) {
  return numer(x) * denom(y) === numer(y) * denom(x);
}
function pair(x, y) {
  return [x, y]
}
function head(list) {
  return list[0]
}
function tail(list) {
  return list[1]
}
function make_rat1(n, d) {
  return pair(n, d)
}
function numer(x) {
  return head(x)
}
function denom(x) {
  return tail(x)
}
function print_rat(x) {
  return console.log("" + numer(x) + " / " + denom(x) + "")
}
function make_rat(n, d) {
  const g = gcd(n, d)
  return pair(sign(n) * sign(d) * Math.abs(n / g), Math.abs(d / g))
}

function sign(x) {
  return x < 0
    ? -1
    : x > 0
      ? 1
      : 0;
}

//console.log(gcd(6, 9))
print_rat(add_rat(make_rat(1, 3), make_rat(1, 3)))
print_rat(add_rat(make_rat(1, 2), make_rat(1, 3)))

exports.add_rat = add_rat
exports.make_rat = make_rat
exports.print_rat = print_rat
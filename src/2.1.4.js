function pair(x, y) {
  return [x, y]
}

function add_interval(x, y) {
  return make_interval(lower_bound(x) + lower_bound(y),
    upper_bound(x) + upper_bound(y));
}

function sub_interval(x, y) {
  return make_interval(lower_bound(x) - upper_bound(y), upper_bound(x) - lower_bound(y))
}

function mul_interval(x, y) {
  const p1 = lower_bound(x) * lower_bound(y);
  const p2 = lower_bound(x) * upper_bound(y);
  const p3 = upper_bound(x) * lower_bound(y);
  const p4 = upper_bound(x) * upper_bound(y);
  return make_interval(Math.min(p1, p2, p3, p4),
    Math.max(p1, p2, p3, p4));
}

function div_interval(x, y) {
  if (lower_bound(y) <= 0 && upper_bound(y) >= 0) {
    return "division error (interval spans 0)"
  }
  return mul_interval(x, make_interval(1 / upper_bound(y),
    1 / lower_bound(y)));
}

function make_interval(x, y) {
  return pair(x, y)
}

function upper_bound(a) {
  return a[1]
}

function lower_bound(a) {
  return a[0]
}

function make_center_width(c, w) {
  return make_interval(c - w, c + w)
}

function center(a) {
  return (lower_bound(a) + upper_bound(a)) / 2
}

function width(a) {
  return (upper_bound(a) - lower_bound(a)) / 2
}

function percent(a) {
  return width(a) / center(i) * 100
}

function make_center_percent(c, p) {
  return make_center_width(c, c * p / 100)
}

function par1(r1, r2) {
  return div_interval(mul_interval(r1, r2), add_interval(r1, r2))
}

function par2(r1, r2) {
  const one = make_interval(1, 1)
  return div_interval(one, add_interval(div_interval(one, r1), div_interval(one, r2)))
}

exports.mul_interval = mul_interval
exports.make_interval = make_interval

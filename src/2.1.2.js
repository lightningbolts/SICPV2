function sign(x) {
  if (x < 0) {
    return -1
  } else {
    if (x > 0) {
      return 1
    } else {
      return 0
    }
  }
}

function print_point(p) {
  return console.log("(" + x_point(p) + ", " + y_point(p) + ")")
}

function make_segment(a, b) {
  return [a, b]
}

function start_segment(s) {
  return s[0]
}

function end_segment(s) {
  return s[1]
}

function make_point(x, y) {
  return [x, y]
}

function x_point(p) {
  return p[0]
}

function y_point(p) {
  return p[1]
}

function midpoint_segment(s) {
  return make_point((x_point(start_segment(s)) + x_point(end_segment(s)) / 2), (y_point(start_segment(s)) + y_point(end_segment(s)) / 2))
}

function make_rect(bottom_left, width, height) {
  return make_segment(bottom_left, make_segment(width, height));
}

function height_rect(rect) {
  return end_segment(end_segment(rect));
}

function width_rect(rect) {
  return start_segment(end_segment(rect));
}

function area_rect(rect) {
  return width_rect(rect) * height_rect(rect);
}

function perimeter_rect(rect) {
  return 2 * (width_rect(rect) + height_rect(rect));
}

exports.area_rect = area_rect
exports.make_rect = make_rect
exports.make_segment = make_segment
exports.make_point = make_point
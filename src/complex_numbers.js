const tolerance = 0.00000001

function r(c) {
  return c[0]
}

function i(c) {
  return c[1]
}

function make_complex(r, i) {
  return [r, i]
}

function add_complex(c1, c2) {
  return make_complex(r(c1) + r(c2), i(c1) + i(c2))
}

function sub_complex(c1, c2) {
  return make_complex(r(c1) - r(c2), i(c1) - i(c2))
}

function mul_complex(c1, c2) {
  let a = r(c1)
  let b = i(c1)
  let c = r(c2)
  let d = i(c2)
  return make_complex(a * c - b * d, a * d + b * c)
}

function div_complex(c1, c2) {
  let a = r(c1)
  let b = i(c1)
  let c = r(c2)
  let d = i(c2)
  let q = c ** 2 + d ** 2
  return make_complex((a * c + b * d) / q, (b * c - a * d) / q)
}

function pow_complex(c, exp) {
  let polar = polar_complex(c)
  let length = length_polar(polar)
  let theta = get_exp(polar)
  let new_polar = make_polar(length, theta * exp)
  //console.log(polar, length, theta, new_polar)
  console.log(complex_polar(new_polar))
  return complex_polar(new_polar)
}

function make_polar(length, exp) {
  return [length, Math.E, exp]
}

function length_polar(c) {
  return c[0]
}

function get_exp(c) {
  return c[2]
}

function polar_complex(c) {
  let length = Math.sqrt(r(c) ** 2 + i(c) ** 2)
  let theta = Math.acos(r(c) / length)
  //console.log(length, theta)
  if (length === 0) {
    return make_polar(length, 0)
  }
  return make_polar(length, theta)
}

function print_complex(x) {
  if (r(x) === 0) {
    if (i(x) === 1) {
      return console.log("i")
    } else if (i(x) === -1) {
      return console.log("-i")
    }
    return console.log("" + i(x) + "i")
  } else if (i(x) === 1) {
    return console.log("" + r(x) + "+" + "i")
  } else if (i(x) === 0) {
    return console.log("" + r(x))
  } else if (i(x) === -1) {
    return console.log("" + r(x) + "-i")
  } else if (i(x) < 0) {
    return console.log("" + r(x) + i(x) + "i")
  }
  return console.log("" + r(x) + "+" + i(x) + "i")
}

function print_polar(x) {
  if (length_polar(x) === 0) {
    return console.log("0")
  } else if (length_polar(x) === 1) {
    return console.log("e" + "^" + "(" + get_exp(x) + "i)")
  } else if (get_exp(x) === 0) {
    return console.log("1")
  }
  return console.log(length_polar(x) + "e" + "^" + "(" + get_exp(x) + "i)")
}

function complex_polar(x) {
  let exp = get_exp(x)
  let length = length_polar(x)
  if (Math.cos(exp) < tolerance && Math.cos(exp) > -tolerance) {
    return make_complex(0, length)
  } else if (Math.sin(exp) < tolerance && Math.sin(exp) > -tolerance) {
    return make_complex(length, 0)
  } else if (Math.cos(exp) < 1 + tolerance && Math.cos(exp) > 1 - tolerance) {
    return make_complex(length, 0)
  } else if (Math.sin(exp) < 1 + tolerance && Math.sin(exp) > 1 - tolerance) {
    return make_complex(0, length)
  } else if (Math.cos(exp) < -1 + tolerance && Math.cos(exp) > -1 - tolerance) {
    return make_complex(-length, 0)
  } else if (Math.sin(exp) < -1 + tolerance && Math.sin(exp) > -1 - tolerance) {
    return make_complex(0, -length)
  }
  return make_complex(length * Math.cos(exp), length * Math.sin(exp))
}

let x = make_complex(3, 4)
let y = make_complex(1, -2)
let z = make_complex(0, 1)
print_complex(x)
print_complex(y)
print_complex(add_complex(x, y))
print_complex(sub_complex(x, y))
print_complex(mul_complex(x, y))
print_complex(div_complex(x, y))
print_polar(polar_complex(x))
print_complex(complex_polar(polar_complex(x)))
print_polar(polar_complex(z))
print_complex(pow_complex(z, 3))
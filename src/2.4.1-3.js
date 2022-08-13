const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair, is_undefined } = require("./advanced_primitives")
const tolerance = 0.0000000001
function add_complex(z1, z2) {
  return make_from_real_imag(real_part(z1) + real_part(z2),
    imag_part(z1) + imag_part(z2));
}
function sub_complex(z1, z2) {
  return make_from_real_imag(real_part(z1) - real_part(z2),
    imag_part(z1) - imag_part(z2));
}
function mul_complex(z1, z2) {
  return make_from_mag_ang(magnitude(z1) * magnitude(z2),
    angle(z1) + angle(z2));
}
function div_complex(z1, z2) {
  return make_from_mag_ang(magnitude(z1) / magnitude(z2),
    angle(z1) - angle(z2));
}

function square(x) {
  return x * x;
}

function real_part(z) {
  return magnitude(z) * Math.cos(angle(z));
}
function imag_part(z) {
  return magnitude(z) * Math.sin(angle(z));
}
function magnitude(z) { return head(z); }

function angle(z) { return tail(z); }

function make_from_real_imag(x, y) {
  return pair(Math.sqrt(square(x) + square(y)),
    Math.atan2(y, x));
}
function make_from_mag_ang(r, a) { return pair(r, a); }

function attach_tag(type_tag, contents) {
  return pair(type_tag, contents);
}
function make_insatiable_file(division, file) {
  return pair(division, file);
}
function insatiable_file_division(file) {
  return head(file);
}
function insatiable_file_content(file) {
  return tail(file);
}
function get_record(employee_name, file) {
  const division = insatiable_file_division(file)
  const record = get("get_record", division)(employee_name, insatiable_file_content(file))
  if (!is_undefined(record)) {
    return attach_tag(division, record)
  } else {
    return undefined
  }
}

function make_insatiable_record(division, record) {
  return pair(division, record);
}
function insatiable_record_division(record) {
  return head(record);
}
function insatiable_record_content(record) {
  return tail(record);
}
function get_salary(record) {
  const division =
    insatiable_record_division(record);
  return get("get_salary", division)
    (insatiable_record_content);
}

function find_employee_record(employee_name, files) {
  if (is_null(files)) {
    return undefined;
  } else {
    const record = get_record(employee_name, head(files));
    if (!is_undefined(record)) {
      return record
    } else {
      return find_employee_record(employee_name, tail(files))
    }

  }
}

function make_from_real_imag(x, y) {
  function dispatch(op) {
    return op === "real_part"
      ? x
      : op === "imag_part"
        ? y
        : op === "magnitude"
          ? Math.sqrt(square(x) + square(y))
          : op === "angle"
            ? Math.atan(y, x)
            : error(op, "unknown op -- make_from_real_imag");
  }
  return dispatch;
}

function make_from_mag_ang(r, a) {
  function dispatch(op) {
    return op === "real_part"
      ? r * math_cos(a)
      : op === "imag_part"
        ? r * math_sin(a)
        : op === "magnitude"
          ? r
          : op === "angle"
            ? a
            : error(op, "unknown op -- make_from_real_imag");
  }
  return dispatch;
}

function apply_generic(op, arg) { return head(arg)(op); }

const my_co_num_1 = make_from_real_imag(2.5, -0.5);
const my_co_num_2 = make_from_real_imag(2.5, -0.5);

const result = add_complex(my_co_num_1,
  mul_complex(my_co_num_2,
    my_co_num_2));

imag_part(result);

exports.angle = angle
exports.magnitude = magnitude
exports.make_from_mag_ang = make_from_mag_ang
exports.make_from_real_imag = make_from_real_imag
exports.add_complex = add_complex
exports.sub_complex = sub_complex
exports.mul_complex = mul_complex
exports.div_complex = div_complex
exports.imag_part = imag_part
/**
 * SICP: Part of Daily Routine along with Vocabulary, SAT, Duolingo, SICP, Chemistry, Physics in order
 */
const error_threshold = 0.001

function sqrt_iter(guess, x) {
  return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)
}

function improve(guess, x) {
  return average(guess, x / guess)
}

function average(x, y) {
  return (x + y) / 2
}

function is_good_enough(guess, x) {
  return relative_error(guess, improve(guess, x)) < error_threshold
}

function relative_error(estimate, reference) {
  return Math.abs(estimate - reference) / reference
}

function sqrt(x) {
  return sqrt_iter(1, x)
}

exports.sqrt = sqrt
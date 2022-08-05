function fast(b, n) {
    while (n > 0) {
        b = b * b;
        n--;
    }
    return b;
}
function super_log(n) {
    return Math.log((Math.log(n) / Math.log(10)) / Math.log(10));
}
//console.log(expt_iter(2, 5))
console.log(super_log(fast(2, 2)));

exports.fast = fast
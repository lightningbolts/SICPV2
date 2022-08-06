const { pair, head, tail, list, length } = require("./2.2.1");
describe('Code', function () {
  it('List', function () {
    expect(list(1, 2, 3)).toStrictEqual([1, [2, [3, null]]])
    const alist = list(1, 2, 4);
    expect(head(alist)).toStrictEqual(1)
    expect(tail(alist)).toStrictEqual([2, [4, null]])
    expect(head(tail(alist))).toStrictEqual(2);
    expect(length(alist)).toBe(3)
    expect(length(null)).toBe(0)

  })
})
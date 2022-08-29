const { reverse, append, pair, tail, head, length, list, list_ref, is_null, map, is_pair } = require("./advanced_primitives")
const { add_complex, sub_complex, magnitude, angle, imag_part, mul_complex, div_complex, make_from_mag_ang, make_from_real_imag } = require("./2.4.1-3")
describe('Code', function () {
  it('Stuff', function () {
    const tolerance = 0.00000000001
    const my_co_num_1 = make_from_real_imag(2.5, -0.5);
    const my_co_num_2 = make_from_real_imag(2.5, -0.5);

    const result = add_complex(my_co_num_1,
      mul_complex(my_co_num_2,
        my_co_num_2));
    //expect(angle(add_complex(make_from_real_imag(3, 4), make_from_real_imag(3, 4)))).toBeCloseTo(angle(make_from_real_imag(6, 8)), 10)
    //expect(imag_part(result)).toStrictEqual(-3);
  })
})
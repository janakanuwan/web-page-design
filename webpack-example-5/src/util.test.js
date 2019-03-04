const getFilteredHeros = require('./util');

test('empty publish and empty heroData result empty', () => {
  expect(getFilteredHeros([], [])).toEqual([]);
});


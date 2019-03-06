import heroUtil from './heroUtil';

test('empty publish and empty heroData result empty', () => {
    expect(heroUtil.filteredHeroesByPublisher([], [])).toEqual([]);
});


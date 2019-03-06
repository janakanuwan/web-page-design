const filteredHeroesByPublisher = (publisher, heroDataArray) =>
    heroDataArray.filter(hero => publisher === hero.publisher);

export default {
    filteredHeroesByPublisher
};

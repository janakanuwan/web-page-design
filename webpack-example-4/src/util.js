// filtering by publisher name
function getFilteredHeroes (publisher, heroDataArray) {
	const filteredHeros = [];
	heroDataArray.forEach(heroData => {
		if(publisher == heroData.publisher){
			filteredHeros.push(heroData);
		}
	});
	return filteredHeros;
}


module.exports = getFilteredHeroes;

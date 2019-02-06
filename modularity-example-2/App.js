
// convert the data to supported format
const parseHeroData = function (dataArray = []){
	const heroes = [];
	for (const dataItem of dataArray){
		// console.log(dataItem);
		const powerstats = dataItem.powerstats;
		const heroPower = new PowerStats(powerstats.intelligence, powerstats.strength, powerstats.speed);
		heroes.push(new Hero(dataItem.id, dataItem.name, heroPower, dataItem.image, dataItem.publisher));
	}
	return heroes;
	// Hint: This can be simplified using Array.map()
};

// filtering by publisher name
const getFilteredHeroes = (publisher, heroDataArray) => {
	const filteredHeros = [];
	heroDataArray.forEach(heroData => {
		if(publisher == heroData.publisher){
			filteredHeros.push(heroData);
		}
	});
	return filteredHeros;
	// Hint: This can be simplified using Array.filter()
};

// class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class App {
	constructor(dataArray){
		// set the data
		this.heroes = parseHeroData(dataArray);	
	}

	renderHeros(publisherArray) {
		console.log(publisherArray);

		const albumContainer = document.querySelector('#album-container');
		// clear the exiting items
    	albumContainer.innerHTML = '';

		publisherArray.forEach(publisher => {
			// find hero by publisher
			const filteredHeros = getFilteredHeroes(publisher, this.heroes);

			// create album for each publisher type
			const heroAlbumView = new HeroAlbumView(publisher, filteredHeros);
			// add the elements to display
			albumContainer.append(heroAlbumView);
		});
	}
}

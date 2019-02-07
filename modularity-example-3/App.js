
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


// sort by intelligence
const sortByIntelligenceDesc = function(hero1, hero2) {
  return hero2.powerstats['intelligence'] - hero1.powerstats['intelligence'];
};
const sortByIntelligenceAsc = function(hero1, hero2) {
  return hero1.powerstats['intelligence'] - hero2.powerstats['intelligence'];
};



// class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class App {
	constructor(dataArray, publisherArray){
		// set the data
		this.heroes = parseHeroData(dataArray);	
		this.publishers = publisherArray;

		console.log(this.publishers);

		// bind the fucntion
		this._sortAlbums = this._sortAlbums.bind(this);

		// buttons
		const descIntelElement = document.querySelector('#desc-intel');
		const descIntelButton = new SortButton( descIntelElement, this._sortAlbums, sortByIntelligenceDesc);

		const ascIntelElement = document.querySelector('#asc-intel');
		const ascIntelButton = new SortButton( ascIntelElement, this._sortAlbums, sortByIntelligenceAsc);
	}

	// JS sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	_sortAlbums(sortFunction) {
		console.log("Before:");
		console.log(this.heroes);

		this.heroes.sort(sortFunction);

		console.log("After:");
		console.log(this.heroes);

    	this.renderHeros();
	}


	renderHeros() {
		const albumContainer = document.querySelector('#album-container');
		// clear the exiting items
    	albumContainer.innerHTML = '';

		this.publishers.forEach(publisher => {
			// find hero by publisher
			const filteredHeros = getFilteredHeroes(publisher, this.heroes);

			// create album for each publisher type
			const heroAlbumView = new HeroAlbumView(publisher, filteredHeros);
			// add the elements to display
			albumContainer.append(heroAlbumView);
		});
	}
}



// Object to keep hero details
function Hero (id, name, powerstats = {}, image = '', publisher = '') {
	// constructor function to initialize object
	this.id = id;
	this.name = name
	this.powerstats = powerstats;
	this.image = image;
	this.publisher = publisher;
}
function PowerStats (intelligence, strength, speed){
	// constructor function to initialize object
	this.intelligence = intelligence;
	this.strength = strength;
	this.speed = speed;
}

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

// define how the hero should look
const HeroView = function(heroData) {
	// create elements in hero view
	const name = document.createElement('h3');
	name.textContent = heroData.name;

	const image = document.createElement('img');
	image.src = heroData.image;

	const powerInfo = document.createElement('p');
	powerInfo.textContent = 'Powers: ';

	const powerDetails = document.createElement('ul');
	Object.keys(heroData.powerstats).forEach(key => {
		const listItem = document.createElement("li");
		listItem.textContent = key + ': '+heroData.powerstats[key];
		powerDetails.appendChild(listItem);
	});

	// add elements to hero view
	const heroItem = document.createElement('div');
	heroItem.setAttribute('class', 'hero-item'); // set class name

	heroItem.appendChild(name);
	heroItem.appendChild(image);
	heroItem.appendChild(powerInfo);
	heroItem.appendChild(powerDetails);

	return heroItem;
};

// define how the heroes album should look
const HeroAlbumView = function(publisher, heroDataList) {
	
	const publisherInfo = document.createElement('h2');
	publisherInfo.textContent = 'Super Heroes from \'' + publisher + '\'';
	publisherInfo.classList.add('hero-container-header');

	const heroContainer = document.createElement('div');
	heroContainer.classList.add('hero-container'); // set class

	heroContainer.appendChild(publisherInfo);

	// add to the container
	heroDataList.forEach(heroData => 
		heroContainer.appendChild(new HeroView(heroData)) 
	);

	return heroContainer;
};

const app = new App(heroData.getData());
app.renderHeros(['Marvel Comics', 'DC Comics']);

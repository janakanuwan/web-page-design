
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

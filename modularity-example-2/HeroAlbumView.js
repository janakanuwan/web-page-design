
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

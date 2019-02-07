
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

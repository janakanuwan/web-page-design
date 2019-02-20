import './../assets/styles/appStyle.scss';

const tutorialInfo = (data) => {				// Arrow functions 
	const {name, description:des} = data; 		// Destructuring
	console.log(`Starting ${data.name}`); 		//Template Literals

	const title = document.createElement('h2');
	title.textContent = name;
	
	const description = document.createElement('p');
	description.textContent = des;

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo({ name: 'Tutoial 3 - Example 4', description: 'This tutorial uses Jest for JS testing' });

const printFirst = (list) => {
	const [a, ...rest] = lists
	console.log(a);
	console.log(rest);
};

printFirst([1, 3, 5])
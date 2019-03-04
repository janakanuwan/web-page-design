import './../assets/styles/appStyle.scss'

const tutorialInfo = function (data) {
	console.log('TutorialInfo');

	const title = document.createElement('h2');
	title.textContent = `Tutorial ${data.id}`;
	
	const description = document.createElement('p');
	description.textContent = `This tutorial try to explain the basic concepts of ${data.concept}`;

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo({id: 4, concept: 'Bebel'});


const printFirst = (list) => {
  const [a, ...rest] = lists
  console.log(a);
  console.log(rest);
};
printFirst([1, 3, 5])



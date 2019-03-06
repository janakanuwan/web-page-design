import './../assets/styles/appStyle.scss'

import React from 'React'
import ReactDOM from 'react-dom'

// ReactComponent: using functions
const TutorialInfo = () => {
	console.log('TutorialInfo');

	return (
		<div>
			<h1>Tutorial 4</h1>
			<p>This tutorial try to explain the basic concepts of React</p>
		</div>
	);
};

ReactDOM.render(
  <TutorialInfo />,
  document.getElementById('container')
);

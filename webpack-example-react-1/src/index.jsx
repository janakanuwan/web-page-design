import './../assets/styles/appStyle.scss'

import React from 'React'
import ReactDOM from 'react-dom'

const TutorialInfo = (props)  => {
	console.log('TutorialInfo');
	console.log(props);

	const {id, concept} = props;

	return (
		<div>
			<h1>Tutorial {id}</h1>
			<p>This tutorial try to explain the basic concepts of {concept}</p>
		</div>
	);
};


ReactDOM.render(
  <TutorialInfo props={...{id: 4, concept: 'React'}}/>,
  document.getElementById('container')
);

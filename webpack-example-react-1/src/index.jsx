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



// // ReactComponent: using class
// class TutorialInfo1 extends React.Component {
//   render() {
//   	console.log('TutorialInfo1');
//     return (
// 		<div>
// 			<h1>Tutorial 4</h1>
// 			<p>This tutorial try to explain the basic concepts of React 1</p>
// 		</div>
//     );
//   }
// }

// ReactDOM.render(
//   <TutorialInfo1 />,
//   document.getElementById('container')
// );




// function capitalize(text){
// 	return text.toUpperCase();
// }

// // React Component with variables
// const TutorialInfo2 = (props)  => {
// 	console.log('TutorialInfo2');
// 	console.log(props);

// 	// QUESTION: What is 'props'?
// 	// QUESTION: Can we avoid this?

//	// QUESTIONS: 
//		// - How the 'props' are used to pass data? 
//		// - Can we change the values in 'props'?
//		// - Instead of 'props.data.id' can we directly use 'data.id'?
//		// - How functions are used inside the 'jsx' syntax?
// 	return (
// 		<div>
// 			<h1>Tutorial {props.data.id}</h1>
// 			<p>This tutorial try to explain the basic concepts of {capitalize(props.data.concept)}</p>
// 		</div>
// 	);
// };

// // QUESTION: How the data is passed to React component? 
// ReactDOM.render(
//   <TutorialInfo2 data={{id: 4, concept: 'React 2'}}/>,
//   document.getElementById('container')
// );




// // React Component with variables with class
// class TutorialInfo3 extends React.Component{
// 	// constructor(props) {
// 	// 	super(props);

// 	// 	console.log('TutorialInfo3');
// 	// 	console.log(props);
// 	// }

// 	render(){
//		// QUESTION: Why do we need to use 'this.props' ?
// 		return (
// 			<div>
// 				<h1>Tutorial {this.props.data.id}</h1>
// 				<p>This tutorial try to explain the basic concepts of {this.props.data.concept}</p>
// 			</div>
// 		);
// 	}
	
// };

// ReactDOM.render(
//   <TutorialInfo3 data={{id: 4, concept: 'React 3'}}/>,
//   document.getElementById('container')
// );






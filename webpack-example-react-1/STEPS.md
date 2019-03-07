# webpack-example-react-1


## steps

1. Install '[react](https://www.npmjs.com/package/react)' and '[react-dom](https://www.npmjs.com/package/react-dom)' as dependencies (NOT development dependencies)
```bash
npm install --save react react-dom
# npm i -S react react-dom
```
>- What was the change in `package.json`?
>- Why do we want to save 'react' and 'react-dom' as (production) dependencies instead of development dependencies?

2. Install '[babel-preset-react](https://babeljs.io/docs/en/babel-preset-react)' to support react syntax (specially JSX)
```bash
npm install --save-dev @babel/preset-react
# npm i -D @babel/preset-react
```
>- What is the functionality of 'babel-preset-react'? [Converting JSX into React classes/functions](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)

	- Configure the 'babel-preset-react' in `webpack.config.js` as a 'preset'

```javascript
// webpack.config.js
module.exports = {

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},

};
```
>- What are the other ways of configuring 'babel'? Hint: [Configure Babel](https://babeljs.io/docs/en/configuration)

3. Let's convert the early example to React code. 
	- Rename the `src/index.js` to `src/index.jsx`
	- Change the entry point in `webpack.config.js` to support new file
	- Enable Babel to support the 'jsx' files 
```javascript
module.exports = {

	entry: './src/index.jsx',


	module: {
		rules: [
			
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}
		]
	},
};
```

	- Add React (JS) code to `src/index.jsx` (Creating React component)

```javascript
// src/index.js -> src/index.jsx

import './../assets/styles/appStyle.scss'

import React from 'react'
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

```

>- Where do we use imported 'React'?
>- What is the purpose of importing 'React'?
>- What is a React Component?
>- What does the 'ReactDOM.render' do?
>- Can we add multiple components/elements to 'ReactDOM.render' to render at the same time?
>- How can we render multiple elements at the same time? Hint: DOM tree

4. Different ways of creating React components

>- React component using class syntax
```javascript
class TutorialInfo1 extends React.Component {
  render() {
  	console.log('TutorialInfo1');
    return (
		<div>
			<h1>Tutorial 4</h1>
			<p>This tutorial try to explain the basic concepts of React 1</p>
		</div>
    );
  }
}

ReactDOM.render(
  <TutorialInfo1 />,
  document.getElementById('container')
);
```

>- React component with variables
```javascript
function capitalize(text){
	return text.toUpperCase();
}

const TutorialInfo2 = (props)  => {
	console.log('TutorialInfo2');
	console.log(props);

	// QUESTION: What is 'props'?
	// QUESTION: What can you see in console about 'props'? What are the properties of 'props'?
	// QUESTION: Can we avoid this?

	// QUESTIONS: 
    // - How the 'props' are used to pass data? 
    // - Can we change the values in 'props'?
    // - Instead of 'props.data.id' can we directly use 'data.id'?
    // - How functions are used inside the 'jsx' syntax?
	return (
		<div>
			<h1>Tutorial {props.data.id}</h1>
			<p>This tutorial try to explain the basic concepts of {capitalize(props.data.concept)}</p>
		</div>
	);
};

// QUESTION: 
// - How the data is passed to React component?
// - Note the curly brackets and name of the data (i.e. data={{id: 4, concept: 'React 2'}} )
ReactDOM.render(
  <TutorialInfo2 data={{id: 4, concept: 'React 2'}}/>,
  document.getElementById('container')
);
```
>- React component with classes (constructor)
```javascript
class TutorialInfo3 extends React.Component{
	constructor(props) {
		super(props);

		console.log('TutorialInfo3');
		console.log(props);
	}

	render(){
		// QUESTION: Why do we need to use 'this.props' ?
		return (
			<div>
				<h1>Tutorial {this.props.data.id}</h1>
				<p>This tutorial try to explain the basic concepts of {this.props.data.concept}</p>
			</div>
		);
	}
	
};

ReactDOM.render(
  <TutorialInfo3 data={{id: 4, concept: 'React 3'}}/>,
  document.getElementById('container')
);
```
# webpack-example-react-1


## steps

1. Install '[react](https://www.npmjs.com/package/react)' and '[react-dom](https://www.npmjs.com/package/react-dom)' as dependencies (NOT development dependencies)
```bash
npm install --save react react-dom
# npm i -S react react-dom
```
>- Why do we want to save 'react' and 'react-dom' as production dependencies instead of development dependencies?
>- What was the change in `package.json`?

2. Install '(babel-preset-react)[https://babeljs.io/docs/en/babel-preset-react]' to support react syntax (specially JSX)
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
	- Add the 'jsx' to 'babel-loader' 
```javascript
module.exports = {
	entry: './src/index.jsx',


	module: {
		rules: [
			
			{
				test: /\.js[x]$/,
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

	- Add the 'jsx' file support to 

```javascript
// src/index.js -> src/index.jsx

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

```
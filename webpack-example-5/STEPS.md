# webpack-example-5


## steps

1. Let's use the project from last week (with `webpack webpack-cli webpack-dev-server sass-loader node-sass style-loader css-loader html-webpack-plugin jest` installed as development dependencies)
```javscript
// package.json (DO NOT ADD THIS LINE)
{
  "name": "webpack-example-5",
  "version": "1.0.0",
  "description": "webpack 5 example",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "build-dev": "webpack --mode development",
    "start": "webpack-dev-server --mode development --hot --inline",
    "start-open": "webpack-dev-server --mode development --open",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "author": "YOUR NAME",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^2.1.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.1.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.29.5",
    "webpack-cli": "^3.2.3",
    "webpack-dev-server": "^3.1.14"
  }
}
```
```javascript
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader',   // translates CSS into CommonJS
					'sass-loader'   // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({         
			template: './assets/index.html',  // instead of creating a new file, use the template
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};
```

```html
<-- assets/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
    <title>Webpack Example 5</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>

    <div id="container"></div>
    
  </body>
</html>
```

```javascript
// src/index.js
import './../assets/styles/appStyle.scss'

const tutorialInfo = function () {
	console.log('TutorialInfo');

	const title = document.createElement('h2');
	title.textContent = 'Tutoial 4 - Babel';
	
	const description = document.createElement('p');
	description.textContent = 'This tutorial try to explain the basic concepts of jest';

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo();

```
>- If you just copied all files from old project and renamed as a new project, you need to run `npm install` to load the dependencies.

2. Install [babel-loader](https://github.com/babel/babel-loader) along with its dependencies (`@babel/core` and `@babel/preset-env`)
```bash
npm i -D babel-loader @babel/core @babel/preset-env
```

3. Configure Babel for transpiling JavaScript files (append the following _rule_ to `webpack.config.js`)
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
					  presets: ['@babel/preset-env']
					}
				}
			}
		]
	},

};
```

>- What are meant by _test_, _use_ and _loader_ ?
>- What is meant by _exclude_? Is it compulsory?
>- What are _(presets)[https://babeljs.io/docs/en/presets]_ ?

4. Add some ES6+ codes to our `src/index.js` file and see how they work.
```javascript
const tutorialInfo = function (data) {
	console.log('TutorialInfo');

	const title = document.createElement('h2');
	title.textContent = `Tutorial ${data.id}`;      // [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
	
	const description = document.createElement('p');
	description.textContent = `This tutorial try to explain the basic concepts of ${data.concept}`;

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo({id: 4, concept: 'Bebel'});
```
>- Go to 'index.js' via _console_ and observe the transpiled code!
>- What is the difference between transpiled code and the actual code?

5.  Append the following to `src/index.js` and try to identify the error location using _'inspect'_ or _'console'_ .
```javascript
// src/index.js

const printFirst = (list) => {
  const [a, ...rest] = lists    // [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
  console.log(a);
  console.log(rest);
};
printFirst([1, 3, 5])
```
>- Where is the error? What if there are a large number of codes and multiple people are editing the code?
>- Is the error shown in the console is same as your source code? If not, why is that?

6. Improving the debugging by mapping transformed code (which browser executes) to actual source code.
	- Using a [source map](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
	- Let's enable [source map](https://webpack.js.org/configuration/devtool/) in webpack

```javascript
// webpack.config.js

module.exports = {

  devtool: 'cheap-module-source-map'

}
```
>- Can you see any difference in error location in console debug? If not, why?
>- What is meant by 'cheap-module-source-map'? What are the other types of source maps?

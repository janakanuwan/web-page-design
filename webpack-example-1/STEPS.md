# webpack-example-1


## steps

1. Create directory to keep project
```sh
mkdir webpack-example-1  
cd webpack-example-1
```

2. Initialize npm to configure project (type the required fields)
```sh
npm init
```

3. Create a .gitignore file and add the following content(to remove local dependencies e.g. "/node_modules")
```
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules

# production
/build
/dist
```

4. Install webpack 4 locally (as a development dependency)
	- More details [webpack getting-started](https://webpack.js.org/guides/getting-started/)
```sh
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

   - Add `{"private": true}` to `package.json` prevent an accidental publish of your code

5. Configure webpack to build the project/module
	- Add `"scripts": {"build": "webpack"}` to `package.json`

6. Run the npm script "build" to build the project/module
```sh
npm run build
```

> - Notice the failure due to missing `src` directory (why? webpack 4 is looking for an entry point in `./src` as a default )

7. Create the directory structure (`src`, `test`, `assets` inside the project directory)
```sh
mkdir src  		# to keep source codes
mkdir test 		# to keep test codes
mkdir assets	# to keep assets (images, style sheets, static files)
```

   - Create and add `index.html` to `src`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>Webpack Example 1</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>

    <div id="container"></div>
  </body>
</html>
```

   - Create and add `index.js` to `src`
```javascript
console.log("Welcome to webbpack 4");
```

8. Build the project again
```sh
npm run build
```

> - NOTE: webpack will generate `dist/main.js` as the output, open it in a text editor and see how it looks
> - See: WARNING in configuration. The 'mode' option has not been set
   - Set the development mode
     - Change `"scripts": {"build": "webpack"}` to `"scripts": {"build": "webpack --mode development"}`

9. Run npm script "build" and see the `dist/main.js` in text editor (What are the observations?)

10. Let's copy the `index.html` to `dist` directory and add '`main.js` to load (add following to <body>)
```html
<script src="main.js"></script>
```
11. add a simple code to `index.js`
```javascript
const tutorialInfo = function () {
	console.log('TutorialInfo');

	const title = document.createElement('h2');
	title.textContent = 'Tutoial 3';

	const description = document.createElement('p');
	description.textContent = 'This tutorial try to explain the basic concepts of JS build tools';

	const container = document.querySelector('#container');
	container.appendChild(title);
	container.appendChild(description);
};

tutorialInfo();
```	

12. Open the `dist/index.html` in browser directly (what are the issues?)

13. Install `webpack-dev-server`
```sh
npm install --save-dev webpack-dev-server
```
 - Append 'webpack-dev-server' to `package.json` as follows:
```json
"scripts": {"start": "webpack-dev-server --mode development"}
```
 - Start the dev-server
```sh
npm run start
# npm start
```
 - Open the link [http://localhost:8080/](http://localhost:8080/) in browser (Is there any output? What's wrong?)
   - Go to [http://localhost:8080/dist](http://localhost:8080/dist)
 - Do a change in `index.js`. What will happen?

14. Let's change served directory using webpack configurations
	- Create `webpack.config.js` in the same directory as `package.json`
```javascript
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

> - What are '[entry](https://webpack.js.org/concepts/#entry)' and '[output](https://webpack.js.org/concepts/#output)' ?
> - Why there is no need to specify the config file? If `webpack.config.js` is present, the webpack command picks it up by default

 - Append the following to 'module.exports' in `webpack.config.js` to change the serving director for 'webpack-dev-server'

```
devServer: {
	contentBase: path.join(__dirname, 'dist')
}
```
> - Q1: How to change the hosting port?

15. Enable [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)
	- Change `{"start": "webpack-dev-server --mode development"}` to `{"start": "webpack-dev-server --mode development --hot --inline"}` in `pacakge.json`

	- Do a change in `index.js` and observe the browser. What will happen?



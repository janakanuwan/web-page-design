# webpack-example-3


## steps

1. Install `babel-loader` along with its dependencies (`@babel/core` and `@babel/preset-env`)
```bash
npm install -D babel-loader @babel/core @babel/preset-env
```

2. Add the `babel-loader` to `webpack.config.js` to transform JS code to backward compatible JS code
```
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
>- What is meant by 'exclude'? Can we omit it?
>- What are meant by '[presets](https://babeljs.io/docs/en/presets)'

3. Start the `webpack-dev-server`
```bash
npm start
```

4. Let's code in ES6 syntax
```javascript
// index.js

import './../assets/styles/appStyle.scss';

const tutorialInfo = (data) => {        // Arrow functions 
  const {name, description:des} = data;     // Destructuring
  console.log(`Starting ${data.name}`);     //Template Literals

  const title = document.createElement('h2');
  title.textContent = name;
  
  const description = document.createElement('p');
  description.textContent = des;

  const container = document.querySelector('#container');
  container.appendChild(title);
  container.appendChild(description);
};

tutorialInfo({ name: 'Tutoial 3 - Example 3', description: 'This tutorial try to explain the Babel' });
```

5. Let's append following to `index.js` and observe the console.
```javascript
// index.js
const printFirst = (list) => {
  const [a, ...rest] = lists
  console.log(a);
  console.log(rest);
};

printFirst([1, 3, 5])
```
> - Where is the error?
> - Is the error shown in console is same as your source code? If not, why is that?

6. Improving the debugging by mapping transformed code (which browser executes) to actual source code.
  - Using a [source map](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
  - Let's enable [source map](https://webpack.js.org/configuration/devtool/) in webpack
```
module.exports = {
  devtool: 'cheap-module-source-map'
}
```
> - Can you see any difference in error location in console debug? If not, why?

7. Using html templates
> - In early examples we added a `index.html` file to `dist` directory to load web page. Do we need to do this? What are the issues with this approach?
> - How can we avoid such copying? 

  - Install the [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
```
npm i -D html-webpack-plugin
```

  - Configure HTML-webpack-plugin in `webpack.config.js` (Move the `src/index.html` to `assets/` directory)
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  
  plugins: [
    new HtmlWebpackPlugin({         
      template: './assets/index.html',  // instead of creating a new file, use the template
    })
  ]
};
```

> - What are the [configuration options](https://github.com/jantimon/html-webpack-plugin#options) for HTML webpack plugin?
  - Delete the `dist/index.html` file and run `npm run build-dev`
    >- What are the changes in `dist/index.html` compared to 'assets/index.html'


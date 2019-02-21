# webpack-example-2


## steps

1. Install `sass-loader` and `node-sass` (as development dependencies)
```bash
npm install sass-loader node-sass webpack --save-dev
```
2. Install `style-loader` and `css-loader` also to chain with `sass-loader`
```bash
npm install style-loader css-loader --save-dev
```
> - Check the `package.json`

3. Add all style-sheet loaders to `webpack.config.js` to process/transform style-sheets during the building process
```javascript
// webpack.config.js
module.exports = {
  
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
  }
  // NOTE: you may need to add leading or trailing comma (,) to separate 'module' from the rest
};
```

>- What are meant by 'test' and 'use'?
>- Q3) How can you combine above "scss" and "css" rules to a single rule?
>- Q4) How to use '[url-loader](https://github.com/webpack-contrib/url-loader)' to load images?

5. Start the `webpack-dev-server`
```bash
npm start
```

4. Let's add the following SASS files to `assets/styles/` directory
```scss
// themeColors.scss
$themeColor-Light: #f3e2c7;
$themeColor-Dark:#b68d4c;
```
```scss
// appStyle.scss
@import 'themeColors';
$theme-font:    verdana, sans-serif;

body {
  font: $theme-font;
  background-color: $themeColor-Light;
  h1, h2 {
      color: $themeColor-Dark
  }
}
```

5. Import the SASS within `index.js` 
```javascript
// index.js

import './../assets/styles/appStyle.scss'

```

 - What can you see on the browser?


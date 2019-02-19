# webpack-example-2


## steps

1. Install `sass-loader` and `node-sass` (as development depedency)
```bash
npm install sass-loader node-sass webpack --save-dev
```
2. Install `style-loader` and `css-loader` also to chain with `sass-loader`
```bash
npm install style-loader css-loader --save-dev
```
> - Check the `paclage.json`

3. Add all stylesheet loaders to `webpack.config.js` to processs/transform stylesheets during the building process
```javascript
// webpack.config.js
module.exports = {
  
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader",   // translates CSS into CommonJS
              "sass-loader"   // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
  }
};
```

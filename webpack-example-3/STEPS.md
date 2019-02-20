# webpack-example-3


## steps

> - In early examples we added a `index.html` file to `dist` directory to load web page. Do we need to do this? What are the issues with this approach?
> - How can we avoid such copying? 

1. Install the [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
```
npm i -D html-webpack-plugin
```

 - Move the `src/index.html` to `assets/` directory)

2. Configure HTML-webpack-plugin in `webpack.config.js`
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  plugins: [
    new HtmlWebpackPlugin({         
      template: './assets/index.html',  // instead of creating a new file, use the template
    })
  ]
  // NOTE: you may need to add leading or trailing comma (,) to separate 'plugins' from rest
};
```

> - What are the [configuration options](https://github.com/jantimon/html-webpack-plugin#options) for HTML webpack plugin?
> - Q5) How can we create a custom HTML file instead of using a template?

3. Delete the `dist/index.html` file and run `npm run build-dev`. What are the observations?
    >- What are the changes in `dist/index.html` compared to `assets/index.html`


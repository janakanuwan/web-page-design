# webpack-example-react-2


## steps


1. Create React components to show hero information
```javascript
// src/view/PowerStats.jsx
import React from 'react'

class PowerStats extends React.Component{

    // NOTE: render method should be implemented if you use ES6 classes
    render(){
        // NOTE: we extract the data first from 'props'
        const {data} = this.props;

        // NOTE: In list we have to add 'key' attribute. Why?
        const powerList = Object.entries(data).map((name, index) =>
            <li key={index}> {name[0]} : {name[1]} </li>
        );

        return (
            <div>
                <p>Powers: </p>
                <ul> {powerList} </ul>
                {/* NOTE: JSX comments */}
            </div>
        );
    }
}

export default PowerStats;
```
>- What is meant by 'export'? Hint: [Modules](http://exploringjs.com/es6/ch_modules.html)
```javascript
// src/view/Hero.jsx
import React from 'react'

// NOTE: We did not added the extension. Will it be a problem?
// React Component
import PowerStats from './PowerStats'

// NOTE: React component starts with Capital letter
class Hero extends React.Component{

    render(){
        // NOTE: we extract the data first from 'props'
        const {hero} = this.props;

        return (
            <div className={"hero-item"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>
                {/* NOTE: we can use the child component directly in JSX */}
                {/* NOTE: we pass the data by a known name (i.e. 'data') */}
                <PowerStats data={hero.powerstats}/>
            </div>
        );
    }
}

export default Hero;
```

```javascript
// src/view/MyHeroes.jsx
import React from 'react'

// React Component
import Hero from './Hero'

class MyHeroes extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {heroes} = this.props;

        // NOTE: html uses simple names for its attributes, but JSX use camel case!
        // IMPORTANT: Here we only load one hero. How can we load multiple heros?
        return (
            <div className={"hero-container"}>
                <Hero hero={heroes[0]} />
            </div>
        );
    }
}

export default MyHeroes;
```

2. Copy the '[hero-container.css](https://raw.githubusercontent.com/janakanuwan/web-page-design/master/modularity-example-3/hero-container.css)' and '[hero-item.css](https://raw.githubusercontent.com/janakanuwan/web-page-design/master/modularity-example-3/hero-item.css)' to `src/styles`

3. Render the react components from `src/index.jsx`
```javascript
// NOTE: we add the extension also so that webpack can resolve them.
// How to remove this extension?
import './../assets/styles/hero-item.css'
import './../assets/styles/hero-container.css'

// React
import React from 'react'
import ReactDOM from 'react-dom'

// React component
import MyHeroes from './view/MyHeroes'

const hero1 = {
    "id": 1,
    "name": "A-Bomb",
    "powerstats": {
        "intelligence": 38,
        "strength": 100,
        "speed": 17
    },
    "image": "1-a-bomb.jpg",
    "publisher": "Marvel Comics"
}; 
const data = [ hero1 ];

ReactDOM.render(
  <MyHeroes className="hero-container" heroes={data} />,
  document.getElementById('container')
);
```

3. Start 'webpack-dev-server'
```bash
npm start
```
>- What are the errors? webpack can not resolve the extensions (jsx) during _import_!

4. Ask webpack (`webpack.config.js`) to resolve file extensions (.js, .jsx) 
```javascript
// webpack.config.js
module.exports = {
    
	module: {
		rules: [
			
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				resolve: {
					extensions: [".js", ".jsx"]
				},
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			
		]
	},
};
```

5. Adding images
    - Install the '[url-loader](https://github.com/webpack-contrib/url-loader)' along with '[file-loader](https://github.com/webpack-contrib/file-loader)' to load images
```bash
npm i -D url-loader file-loader
```
Add it to `webpack.config.js`
```javascript
// webpack.config.js
module.exports = {
	entry: './src/index.jsx',
	
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'media/[name].[ext]',
							limit: 8192
						}
					}
				]
			}
		]
	},
	
};
```
>- What is meant by 'name' and 'limit'?

    - Adding images
    - Import image and add it to hero object
```javascript
// src/index.jsx

import imageHero1 from './../assets/images/1-a-bomb.jpg'

const hero1 = {
	"id": 1,
	"name": "A-Bomb",
	"powerstats": {
		"intelligence": 38,
		"strength": 100,
		"speed": 17
	},
	"image": imageHero1,
	"publisher": "Marvel Comics"
};

```

6. How will you extend above to support multiple heroes?

// NOTE: we add the extension also so that webpack can resolve them.
// How to remove this extension?
import './../assets/styles/hero-item.css'
import './../assets/styles/hero-container.css'

// React
import React from 'react'
import ReactDOM from 'react-dom'

// utilities
import heroUtil from './util/heroUtil'

// data
import rawData from './data'

// React component
import MyHeroes from './view/MyHeroes'


// ReactComponent: using functions
const data = heroUtil.parseHeroData(rawData);

ReactDOM.render(
  <MyHeroes className="hero-container" heroes={data} />,
  document.getElementById('container')
);



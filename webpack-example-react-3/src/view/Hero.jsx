import React from 'react'

// React Component
// NOTE: We did not added the extension. Will it be a problem?
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
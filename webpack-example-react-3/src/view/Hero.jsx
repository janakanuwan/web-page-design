import React from 'react'

import PowerStats from './PowerStats'

class Hero extends React.Component{

    constructor(props){
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.increaseStrength = this.increaseStrength.bind(this);
        this.decreaseStrength = this.decreaseStrength.bind(this);
    }

    increaseStrength(e) {
        // TODO
        console.log(e);
    }

    decreaseStrength(e) {
        // TODO
        console.log(e);
    }

    render(){
        const {hero} = this.props;

        return (
            <div className={"hero-item"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>

                <button onClick={this.increaseStrength}>Increase Strength</button>
                <button onClick={this.decreaseStrength}>Decrease Strength</button>

                <PowerStats data={hero.powerstats}/>
            </div>
        );
    }
}

export default Hero;
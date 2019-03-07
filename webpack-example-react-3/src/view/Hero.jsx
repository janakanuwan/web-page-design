import React from 'react'

import PowerStats from './PowerStats'

class Hero extends React.Component{

    render(){
        const {hero} = this.props;

        return (
            <div className={"hero-item"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>
                <PowerStats data={hero.powerstats}/>
            </div>
        );
    }
}

export default Hero;
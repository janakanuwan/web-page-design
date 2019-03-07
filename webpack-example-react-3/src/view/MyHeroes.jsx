import React from 'react'


import Hero from './Hero'

class MyHeroes extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {heroes} = this.props;


        return (
            <div className={"hero-container"}>
                <Hero hero={heroes[0]} />
            </div>
        );
    }
}

export default MyHeroes;
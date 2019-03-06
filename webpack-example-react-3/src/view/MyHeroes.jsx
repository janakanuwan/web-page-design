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
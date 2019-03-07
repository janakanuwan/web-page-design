# webpack-example-react-3


## steps

We want to change the UI as follows:
![Web Page](./new_hero.png)

NOTE: Now 'Powers' are shown in a bar chart.

1. Let's use '[Recharts](http://recharts.org/en-US/)'. Install '[recharts](https://github.com/recharts/recharts)' as a dependency
```bash
npm i -S recharts
```
2. Add a [barchart](http://recharts.org/en-US/examples/SimpleBarChart) to `src/view/PowerStats.jsx`
```javascript
import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

class HeroPowerChart extends React.Component{

    render(){
        const {data} = this.props;

        return (
            <BarChart
                width={200}
                height={200}
                data={data}
                margin={{
                    top: 5, right: 5, left: 0, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="power1" fill="#8884d8"/>
                <Bar dataKey="power2" fill="#82ca9d"/>
                <Bar dataKey="power3" fill="#ffc658"/>
            </BarChart>
        );
    }
}
```

```javascript
class PowerStats extends React.Component {

    render() {

        const {data} = this.props;

        const data1 = [
            {
                name: 'Powers', power1: 40, power2: 50, power3: 60,
            }
        ];

        return (
            <HeroPowerChart data={data1}/>
        );
    }
}
```

>- What is the relationship between "<Bar dataKey='power1' />" and graph legends and values?
>- What is the relationship between "<XAxis dataKey='name' />" and graph X-label?
>- How to fix the legends to show 'intelligence', 'strength' and 'speed'?

3. Let's add buttons to `src/view/Hero.jsx`
```javascript
class Hero extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const {hero} = this.props;

        return (
            <div className={"hero-item"}>
                <h3>{hero.name}</h3>
                <img src={hero.image}  alt={hero.image}/>
                
                <button>Increase Strength</button>
                <button>Decrease Strength</button>
                
                <PowerStats data={hero.powerstats}/>
            </div>
        );
    }
}
```

4. Let's handle events to change the chart values
```javascript
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
```
>- Why 'onClick' is in camel case instead of 'onclick' as in HTML button format?
>- Why do you have to bind functions inside constructor?

```javascript

```


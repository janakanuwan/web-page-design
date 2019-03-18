import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'


class HeroPowerChart extends React.Component {

    render() {
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
                <Bar dataKey="intelligence" fill="#8884d8"/>
                <Bar dataKey="strength" fill="#82ca9d"/>
                <Bar dataKey="speed" fill="#ffc658"/>
            </BarChart>
        );
    }
}


const graphDataMapper = (data) => {
    const {intelligence, strength, speed} = data;
    return (
        [
            {
                name: 'Powers', intelligence: intelligence, strength: strength, speed: speed,
            }
        ]
    );
};

class PowerStats extends React.Component {

    render() {

        const {data} = this.props;

        return (
            <HeroPowerChart data={graphDataMapper(data)}/>
        );
    }
}

export default PowerStats;
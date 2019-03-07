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

export default PowerStats;
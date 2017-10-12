import React from 'react';
import Marquee3k from 'marquee3000';

import './Ticker.css';


export default class Ticker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            marqueeInitialized: false
        }
    }

    componentWillMount() {
        this.setState({ marqueeInitialized: true})
    }

    componentDidMount() {
        Marquee3k.init({
            selector: 'ticker'
        });
    }

    shouldComponentUpdate() {
        return !this.state.marqueeInitialized
    }


    render() {
        return (
            <div 
                className="ticker" 
                data-speed="0.75"
            >
            <ul className="tickerList">
                {this.props.data.map(({ name }, index) => (
                    <li className="tickerItem" key={index}>{name}</li>
                ))}
            </ul>
            </div>
        )
    }
}
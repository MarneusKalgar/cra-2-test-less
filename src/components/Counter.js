import React, { Component } from 'react';

class Counter extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="counter">
                <p>{this.props.count}</p>
                <button onClick={this.props.addVal}>add</button>
            </div>
        )
    }
}

export default Counter;
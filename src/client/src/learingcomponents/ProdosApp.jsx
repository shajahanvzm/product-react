import React, { Component } from 'react';

class ProdosApp extends Component {
    render() {
        return (
            <div>
                <h1>Gettign messages through Properties</h1>
                <hr />
                <h1>{this.props.greeting}</h1>
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default ProdosApp;
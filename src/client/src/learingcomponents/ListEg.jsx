import React, { Component } from 'react';

class ListEg extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : ['IPhone', 'IPad', 'Mac', 'Air']
        }
    }
    render() {
        return (
            <div>
                <h3>Products</h3>
                <ul>
                    <li>{this.state.products[0]}</li>
                    <li>{this.state.products[1]}</li>
                    <li>{this.state.products[2]}</li>
                    <li>{this.state.products[3]}</li>
                </ul>
                <hr />
                <h3>Using Map()</h3>
                <ul>
                    {this.state.products.map((n,i)=> 
                        <li key={i}>{n}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default ListEg;
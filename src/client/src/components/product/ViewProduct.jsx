import React, { Component } from 'react';

class ViewProduct extends Component {
    action = (event) => {
        alert(event.target.name);
    }

    render() {
        return (

            <tr >
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.type}</td>
                <td>{this.props.product.description}</td>
                <td><a href="#" name='view' onClick={this.action}>View</a> | 
                    <a href="#" name='edit' onClick={this.action}>Edit</a> | 
                    <a href="#" name='delete' onClick={this.action}>Delete</a></td>
            </tr>


        );
    }
}

export default ViewProduct;
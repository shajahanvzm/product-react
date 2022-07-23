import React, { Component } from 'react';

class TableEg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [
                {
                    name: 'Iphone',
                    type: 'Mobile',
                    description: 'Iphone 7+ 128GB',
                    price: 30
                },
                {
                    name: 'IPad',
                    type: 'Tab',
                    description: 'Ipad 12+ 33GN',
                    price: 978
                },
                {
                    name: 'Mac',
                    type: 'Laptop',
                    description: 'Mac Pro 500GG ',
                    price: 678
                }
            ]
        }
    }
    render() {
        return (
            <div>
            <h3>Table Eg</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.products.map((product, i) =>
                            <tr> 
                                <td>{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                            </tr>
                        )}
                </tbody>
            </table>
                
            </div>
        );
    }
}

export default TableEg;
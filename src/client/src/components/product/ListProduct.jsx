import React, { Component } from 'react';
import ViewProduct from './ViewProduct';

class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 'BD12',
                    name: 'Iphone S',
                    type: 'Mobile',
                    description: '76 1326'
                },
                {
                    id: 'BD12',
                    name: 'IPad',
                    type: 'Table',
                    description: 'Table 34 GB RAM'
                },
                {
                    id: 'BD12',
                    name: 'Macbook',
                    type: 'Laptop',
                    description: 'MAC 128GB MB 560 GB'
                }

            ],
        }
    }

    render() {
        return (
            <div>

                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((p, i) =>
                           <ViewProduct product={p} key={i} />
                        )}


                    </tbody>
                </table>

            </div>
        );
    }
}

export default ListProduct;
import React, { Component } from 'react';
import ProdosApp from './ProdosApp'
import StateEg from './StateEg'
import ListEg from './ListEg'
import TableEg from './TableEg'
class Learning extends Component {
    render() {
        return (
            <div>
                 <ProdosApp greeting="Hello thorugh properties in components" name="sha" />
                <StateEg />
                <ListEg />
                <TableEg />
            </div>
        );
    }
}

export default Learning;
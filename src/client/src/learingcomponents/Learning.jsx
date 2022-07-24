import React, { Component } from 'react';
import ProdosApp from './ProdosApp'
import StateEg from './StateEg'
import ListEg from './ListEg'
import TableEg from './TableEg'
import FormEg from './FormEg';
import MultuForm from './MultuForm';
class Learning extends Component {
    render() {
        return (
            <div>
                {/* <ProdosApp greeting="Hello thorugh properties in components" name="sha" />
                <StateEg />
                <ListEg />
                <TableEg /> 

                <FormEg />*/}
                <MultuForm />
            </div>
        );
    }
}

export default Learning;
# product-react


## React Introduction

### Using Props 


```react

import './App.css';
import ProdosApp from './components/ProdosApp'
function App() {
  return (
    <div className="App">
      <ProdosApp greeting="Hello thorugh properties in components" name="sha" />
    </div>
  );
}
export default App;
```

```react
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
```

### Using State

```react
import React, { Component } from 'react';

class StateEg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'Sha',
            lname: 'Jahan',
            email: 'shajahan@mymail.com'
        }
    }
    render() {
        return (
            <div>
                <h3>Details</h3>
                <table>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.lname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{this.state.email}</td>
                    </tr>
                </table>
                
            </div>
        );
    }
}

export default StateEg;
```
```react
import './App.css';

import StateEg from './components/StateEg'
function App() {
  return (
    <div className="App">rcc
     <StateEg />
    </div>
  );
}

export default App;

```

### List Eg

```react
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
```

### Table Eg

```react
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
```

### Multiple field in Form

```react
import React, { Component } from 'react';

class MultuForm extends Component {

    constructor(props) {
        super(props);
        this.state = {

            id: '',
            name: 'Name',
            type: 'Type',
            description: 'Description'

        }
    }

    handleSubmit = (event) => {

        alert(this.state.name + " | " +
            this.state.type + " | " +
            this.state.description + " | "
        )
        event.preventDefault();

    }
    inputChange = (event) => {
        console.log(event.target.name + "=" + event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }
    reset = (event) => {
        this.setState({
            id: '',
            name: 'Name',
            type: 'Type',
            description: 'Description'
        })
    }
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input name="name" type="text"

                        placeholder={this.state.name}
                        onChange={this.inputChange} />
                    <br />

                    <label>Type</label>
                    <input name="type" type="text"

                        placeholder={this.state.type}
                        onChange={this.inputChange} />
                    <br />

                    <label>Description</label>
                    <textarea name="description" type="text"

                        placeholder={this.state.description}
                        onChange={this.inputChange} />
                    <br />

                    <input type="submit" value="Sumbit" />
                    <input type="reset" value="reset" onClick={this.reset} />



                </form>

            </div>
        );
    }
}

export default MultuForm;
```

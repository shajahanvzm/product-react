import React, { Component } from 'react';

class AddProduct extends Component {

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

        event.preventDefault()
        console.log(this.state.id + ", " + this.state.name + ", "
            + this.state.type + ", " + this.state.description)
        // alert(this.state.id +", " + this.state.name +", "
        //     + this.state.type + ", " + this.state.description)

    }

    inputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                <form onSubmit={this.handleSubmit} >

                    <table>
                        <tbody>
                            <tr>
                                <td> Id  </td>
                                <td> <input type="text" name="id" placeholder={this.state.id} onChange={this.inputChange} /> </td>
                            </tr>
                            <tr>
                                <td> Name  </td>
                                <td> <input type="text" name="name" placeholder={this.state.name} onChange={this.inputChange} />  </td>
                            </tr>
                            <tr>
                                <td> Type  </td>
                                <td> <input type="text" name="type" placeholder={this.state.type} onChange={this.inputChange} /> </td>
                            </tr>
                            <tr>
                                <td> Description  </td>
                                <td> <textarea name="description" placeholder={this.state.description} onChange={this.inputChange}  rows="5"/>  </td>
                            </tr>
                            <tr>
                                <td><input type="submit" value="Sumit" /> </td>
                                <td><input type="reset" value="Reset" onClick={this.reset} /> </td>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
        );
    }
}

export default AddProduct;
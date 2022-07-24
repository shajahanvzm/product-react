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
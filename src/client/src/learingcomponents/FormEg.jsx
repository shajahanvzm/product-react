import React, { Component } from 'react';

class FormEg extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:'Type Name here!'
        }
    }

    handleSubmit = (e) =>{
        alert (this.state.data)
        e.preventDefault()
    }

    textChanged = (e) =>{
        console.log(e.target.value)
        this.setState({data: e.target.value})

    }

    reset = () =>{
        this.setState({data:'Type Name here!'})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type="text"  onChange={this.textChanged} placeholder={this.state.data} />
                    <input type="submit"  value="Submit" />
                    <input type="reset" value="reset"  onClick={this.reset} />

                </form>
            </div>
        );
    }
}

export default FormEg;
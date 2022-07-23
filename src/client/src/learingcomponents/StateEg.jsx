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
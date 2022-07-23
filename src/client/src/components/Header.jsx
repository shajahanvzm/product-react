import React, { Component } from 'react';
import '../App.css';


class Header extends Component {
    render() {
        return (
            <div>
                <table className="App-Header">
                    <tbody>
                        <tr>
                            <td>Welcome to Prodos Application, a product management tool</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Header;
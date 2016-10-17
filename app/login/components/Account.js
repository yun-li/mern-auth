var React = require('react');

// API
import { protectedData } from '../api/protected';

class Account extends React.Component {
    
    conponentDidMount() {
        protectedData()
            .then((response) => {
                console.log('success', response);
            }, (error) => {
                console.log('error', error);
            });
    }
    
    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Account</h1>
                    <p>Check console for protected route response</p>
                </div>
            </div>
        );
    }
}

module.exports = Account;
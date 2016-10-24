import React from 'react';
import { connect } from 'react-redux';

// Load actions
import { confirmEmailCode } from '../actions/actions_user';

class EmailConfirm extends React.Component {
    
    componentDidMount() {
        const ECC = this.props.routeParams.emailCode;
        this.props.dispatch(confirmEmailCode(ECC))
            .then((success) => {
                this.context.router.push('/app/account');
            }, (error) => {
                // TO DO ERROR ACTION AND COMPONENT?
                this.context.router.push('/app/account');
            });
    }
    
    render() {
        return (
            <div className="container text-center">
                <h1><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></h1>
                <h1>Confirming Your Email...</h1>
            </div>
        );
    }
}

EmailConfirm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect()(EmailConfirm);
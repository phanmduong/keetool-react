import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Loading from "../../../components/common/Loading";
import ClientForm from "../ClientForm";
import {setFormValidation} from "../../../helpers/helper";
import * as clientListActions from '../clientListActions';

// Import actions here!!

class CreateClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.submit = this.submit.bind(this);
        this.state = {
            header: "Thêm khách hàng"
        };
        this.updateFormData = this.updateFormData.bind(this);
    }

    componentDidMount() {
        setFormValidation('#client-form');
    }

    submit() {

    }

    updateFormData(event) {
        const field = event.target.name;
        let client = {...this.props.client};
        client[field] = event.target.value;
        this.props.clientListActions.updateCreateClientFormData(client);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header card-header-icon" data-background-color="rose">
                            <i className="material-icons">mode_edit</i>
                        </div>
                        <div className="card-content">
                            <h4 className="card-title">{this.state.header}</h4>
                            {this.props.isLoadingClient ? (
                                <div className="card-content">
                                    <Loading/>
                                </div>
                            ) : (
                                <ClientForm
                                    isSavingClient={this.props.isSavingClient}
                                    base={this.props.client}
                                    submit={this.submit}
                                    updateFormData={this.updateFormData}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateClientContainer.propTypes = {
    client: PropTypes.object.isRequired,
    isSavingClient: PropTypes.bool.isRequired,
    clientListActions: PropTypes.bool.isRequired,
    isLoadingClient: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        client: state.clientList.createClient.client,
        isSavingClient: state.clientList.createClient.isSavingClient,
        isLoadingClient: state.clientList.createClient.isLoadingClient
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientListActions: bindActionCreators(clientListActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientContainer);
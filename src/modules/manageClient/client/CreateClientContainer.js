import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Loading from "../../../components/common/Loading";
import ClientForm from "../ClientForm";
import {setFormValidation, showNotification} from "../../../helpers/helper";
import * as clientListActions from '../clientListActions';
import * as clientActions from '../clientActions';
import * as configActions from '../../config/configActions';


// Import actions here!!

class CreateClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.submit = this.submit.bind(this);
        this.state = {
            header: "Thêm khách hàng"
        };
        this.updateFormData = this.updateFormData.bind(this);
        this.updateFormConfigsRequired = this.updateFormConfigsRequired.bind(this);
        this.ping = this.ping.bind(this);
    }

    componentWillMount() {
        this.props.configActions.getConfigsRequired();
        this.props.clientListActions.updateCreateClientFormData({});
        //Xóa trạng thái status của ping
        this.props.clientActions.beginPingClient();
    }

    componentDidMount() {
        setFormValidation('#client-form');
    }

    submit() {
        if ($("#client-form").valid()) {
            if (this.props.statusPing === 1) {
                this.props.clientListActions.createClient(this.props.client, this.props.configsRequired);
            } else {
                showNotification("Kiểm tra tính chính xác của IP", 'top', 'right', 'warning');
            }
        }
    }

    ping(ip){
        this.props.clientActions.pingIP(ip);
    }

    updateFormData(event) {
        const field = event.target.name;
        let client = {...this.props.client};
        client[field] = event.target.value;
        this.props.clientListActions.updateCreateClientFormData(client);
    }

    updateFormConfigsRequired(event, data) {
        var config = {...data};
        config.value = event.target.value;
        this.props.clientListActions.updateConfigsRequiredForm(config);
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
                            {this.props.isLoadingConfigsRequired ? (
                                <div className="card-content">
                                    <Loading/>
                                </div>
                            ) : (
                                <ClientForm
                                    isSavingClient={this.props.isSavingClient}
                                    client={this.props.client}
                                    configsRequired={this.props.configsRequired}
                                    updateFormConfigsRequired={this.updateFormConfigsRequired}
                                    ping={this.ping}
                                    statusPing={this.props.statusPing}
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
    clientListActions: PropTypes.object.isRequired,
    configActions: PropTypes.object.isRequired,
    clientActions: PropTypes.object.isRequired,
    isLoadingConfigsRequired: PropTypes.bool.isRequired,
    statusPing: PropTypes.number.isRequired,
    configsRequired: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        client: state.clientList.createClient.client,
        isSavingClient: state.clientList.createClient.isSavingClient,
        isLoadingConfigsRequired: state.config.configsRequired.isLoadingConfigsRequired,
        configsRequired: state.config.configsRequired.configs,
        statusPing: state.client.ping.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientListActions: bindActionCreators(clientListActions, dispatch),
        clientActions: bindActionCreators(clientActions, dispatch),
        configActions: bindActionCreators(configActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientContainer);
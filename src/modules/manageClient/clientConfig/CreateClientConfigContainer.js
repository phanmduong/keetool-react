import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!
import PropTypes from 'prop-types';

import {setFormValidation} from '../../../helpers/helper';
import ClientConfigForm from "./ClientConfigForm";
import Loading from "../../../components/common/Loading";
import * as configActions from '../../config/configActions';
import * as clientConfigActions from './clientConfigActions';
import * as helper from '../../../helpers/helper';

class CreateClientConfigContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateFormData = this.updateFormData.bind(this);
        this.submit = this.submit.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.state = {
            error: {},
            header: "Thêm cài đặt khách hàng"
        };
    }

    componentWillMount() {
        if (this.props.route.type === "edit") {
            this.setState({
                header: "Sửa cài đặt khách hàng"
            });
            if (this.props.params.clientConfigId) {
                this.props.clientConfigActions.loadClientConfig(this.props.params.clientConfigId);
            }
        }
        let config = {};
        config.clientId = this.props.params.clientId;
        this.props.clientConfigActions.updateClientConfigFormData(config);
        this.props.configActions.loadConfigAll();
    }

    componentDidMount() {
        setFormValidation('#client-config-form');
    }

    componentDidUpdate(){
        setFormValidation('#client-config-form');
    }

    updateFormData(event) {
        const field = event.target.name;
        let config = {...this.props.clientConfig};
        if (event.target.type === "checkbox") {
            config[field] = event.target.checked;
        } else {
            config[field] = event.target.value;
        }
        this.props.clientConfigActions.updateClientConfigFormData(config);
    }

    submit() {
        if ($("#client-config-form").valid()) {
            if (this.props.clientConfig.configId && this.props.clientConfig.configId > 0) {
                this.props.clientConfigActions.createClientConfig(this.props.clientConfig);
            } else {
                helper.showNotification("Vui lòng chọn key", 'top', 'right','warning');
            }
        }
    }

    changeSelect(val) {
        let config = {...this.props.clientConfig};
        if (val) {
            if (this.props.route.type !== 'edit') {
                config.isRequired = val.isRequired;
                config.configId = val.value;
            } else {
                helper.showNotification("Vui lòng không thay đổi key", 'top', 'right', 'warning');
            }
        } else {
            config.isRequired = false;
            config.configId = 0
        }
        this.props.clientConfigActions.updateClientConfigFormData(config);
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
                            {this.props.isLoadingClientConfig ? (
                                <div className="card-content">
                                    <Loading/>
                                </div>
                            ) : (
                                <ClientConfigForm
                                    configs={this.props.configs}
                                    changeSelect={this.changeSelect}
                                    clientConfig={this.props.clientConfig}
                                    isLoadingConfigs={this.props.isLoadingConfigs}
                                    submit={(event) => {
                                        event.preventDefault();
                                        this.submit();
                                    }}
                                    type={this.props.route.type}
                                    updateFormData={this.updateFormData}
                                    isSavingClientConfig={this.props.isSavingClientConfig}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

CreateClientConfigContainer.propTypes = {
    route: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    clientConfigActions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    isLoadingClientConfig: PropTypes.bool.isRequired,
    isSavingClientConfig: PropTypes.bool.isRequired,
    configs: PropTypes.array.isRequired,
    configActions: PropTypes.object.isRequired,
    clientConfig: PropTypes.object.isRequired,
    isLoadingConfigs: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        isLoadingClientConfig: state.clientConfig.isLoadingClientConfig,
        isSavingClientConfig: state.clientConfig.isSavingClientConfig,
        clientConfig: state.clientConfig.clientConfig,
        configs: state.config.configList.configs,
        isLoadingConfigs: state.config.configList.isLoadingConfigs,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientConfigActions: bindActionCreators(clientConfigActions, dispatch),
        configActions: bindActionCreators(configActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientConfigContainer);

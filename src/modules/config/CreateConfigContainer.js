import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Import actions here!!
import PropTypes from 'prop-types';
import * as configActions from './configActions';
import {setFormValidation, isEmptyInput, showTypeNotification} from '../../helpers/helper';
import ConfigForm from "./ConfigForm";
import Loading from "../../components/common/Loading";

class CreateConfigContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateFormData = this.updateFormData.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {
            error: {},
            header: "Thêm config"
        };
    }

    componentWillMount() {
        if (this.props.route.type === "edit") {
            this.setState({
                header: "Sửa config"
            });
        }
        if (this.props.params.configId) {
            this.props.configActions.loadConfig(this.props.params.configId);
        }
    }

    componentDidMount() {
        setFormValidation('#config-form');
    }

    updateFormData(event) {
        const field = event.target.name;
        let config = {...this.props.config};
        if (event.target.type === "checkbox") {
            config[field] = event.target.checked;
        } else {
            config[field] = event.target.value;
        }
        this.props.configActions.updateCreateConfigFormData(config);
    }

    submit() {
        if ($("#config-form").valid()) {
            if (isEmptyInput(this.props.config.type)) {
                showTypeNotification("Vui lòng chọn loại config", 'warning');
            } else {
                this.props.configActions.createConfig(this.props.config);
            }
        }
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
                            {this.props.isLoadingConfig ? (
                                <div className="card-content">
                                    <Loading/>
                                </div>
                            ) : (
                                <ConfigForm
                                    error={this.state.error}
                                    config={this.props.config}
                                    isSavingConfig={this.props.isSavingConfig}
                                    submit={(event) => {
                                        event.preventDefault();
                                        this.submit();
                                    }}
                                    updateFormData={this.updateFormData}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

CreateConfigContainer.propTypes = {
    config: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired,
    configActions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    isLoadingConfig: PropTypes.bool.isRequired,
    isSavingConfig: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        config: state.config.createConfig.config,
        isLoadingConfig: state.config.createConfig.isLoadingConfig,
        isSavingConfig: state.config.createConfig.isSavingConfig
    };
}

function mapDispatchToProps(dispatch) {
    return {
        configActions: bindActionCreators(configActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateConfigContainer);

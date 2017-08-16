/**
 * Created by phanmduong on 8/15/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types'
import EditTabClientComponent from './EditTabClientComponent';
import {bindActionCreators} from 'redux';
import * as clientActions from '../../clientActions';

class EditTabClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.changeCheckTab = this.changeCheckTab.bind(this);
        this.editTabClient = this.editTabClient.bind(this);
    }

    componentWillMount() {
        this.props.clientActions.loadClientTabData(this.props.params.clientId);
    }

    changeCheckTab(tab) {
        this.props.clientActions.changeCheckTabClient(tab);
    }

    editTabClient() {
        this.props.clientActions.editTabClientData(this.props.tabListData, this.props.params.clientId);
    }


    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header card-header-tabs" data-background-color="rose">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                        <li className="">
                                            <Link to={'client/' + this.props.params.clientId + '/info/edit'}>
                                                Thông tin
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to={'client/' + this.props.params.clientId + '/tab/edit'}>
                                                Tính năng
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to={'client/' + this.props.params.clientId + '/config/edit'}>
                                                Cài đặt
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="tab-content">
                                <EditTabClientComponent
                                    isLoadingTab={this.props.isLoadingTab}
                                    isLoadingUpdateTab={this.props.isLoadingUpdateTab}
                                    tabListData={this.props.tabListData}
                                    changeCheckTab={this.changeCheckTab}
                                    editTabClient={this.editTabClient}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditTabClientContainer.propTypes = {
    params: PropTypes.object.isRequired,
    isLoadingTab: PropTypes.bool.isRequired,
    isLoadingUpdateTab: PropTypes.bool.isRequired,
    errorLoadingTab: PropTypes.bool.isRequired,
    tabListData: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        isLoadingTab: state.client.isLoadingTab,
        errorLoadingTab: state.client.errorLoadingTab,
        isLoadingUpdateTab: state.client.isLoadingUpdateTab,
        tabListData: state.client.tabListData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(clientActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTabClientContainer);

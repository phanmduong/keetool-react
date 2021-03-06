/**
 * Created by phanmduong on 8/15/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import * as configActions from '../../config/configActions';
import {bindActionCreators} from "redux";
import ListClientConfigs from '../../config/ListClientConfigs';
import Loading from "../../../components/common/Loading";
import _ from 'lodash';
import Search from "../../../components/common/Search";

class EditConfigClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.loadClientConfigs = this.loadClientConfigs.bind(this);
        this.state = {
            page: 1,
            query: ""
        };
        this.timeOut = null;
        this.clientConfigSearchChange = this.clientConfigSearchChange.bind(this);
    }

    componentWillMount() {
        this.loadClientConfigs();
    }

    clientConfigSearchChange(value) {
        this.setState({
            page: 1,
            query: value
        });
        if (this.timeOut !== null) {
            clearTimeout(this.timeOut);
        }
        this.timeOut = setTimeout(function () {
            this.props.configActions.loadClientConfigs(this.props.params.clientId, this.state.page, value);
        }.bind(this), 500);
    }

    loadClientConfigs(page = 1) {
        this.setState({page});
        this.props.configActions.loadClientConfigs(this.props.params.clientId, page, this.state.query);
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
                                        <li className="">
                                            <Link to={'client/' + this.props.params.clientId + '/tab/edit'}>
                                                Tính năng
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="active">
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
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="col-md-3">
                                            <button
                                                type="button"
                                                className="btn btn-rose"
                                                onClick={() =>
                                                    browserHistory.push('/client-config/' + this.props.params.clientId + '/create')
                                                }
                                            >
                                                Thêm cài đặt
                                            </button>
                                        </div>
                                        <Search
                                            onChange={this.clientConfigSearchChange}
                                            value={this.state.query}
                                            placeholder="Tìm kiếm config (tên, mô tả)"
                                            className="col-md-9"
                                        />
                                    </div>
                                </div>
                                {
                                    this.props.isLoadingClientConfigs ?
                                        <Loading/>
                                        : (
                                            <ListClientConfigs
                                                clientId={this.props.params.clientId}
                                                clientConfigs={this.props.clientConfigs}
                                                deleteClientConfig={this.props.configActions.deleteClientConfig}/>
                                        )
                                }
                            </div>
                        </div>
                        <div className="card-content">
                            <ul className="pagination pagination-primary">
                                {_.range(1, this.props.totalPages + 1).map(page => {
                                    if (Number(this.props.currentPage) === page) {
                                        return (
                                            <li key={page} className="active">
                                                <a onClick={() => this.loadClientConfigs(page)}>{page}</a>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={page}>
                                                <a onClick={() => this.loadClientConfigs(page)}>{page}</a>
                                            </li>
                                        );
                                    }

                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditConfigClientContainer.propTypes = {
    params: PropTypes.object.isRequired,
    clientConfigs: PropTypes.array.isRequired,
    isLoadingClientConfigs: PropTypes.bool.isRequired,
    configActions: PropTypes.object.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return {
        clientConfigs: state.config.clientConfigList.clientConfigs,
        isLoadingClientConfigs: state.config.clientConfigList.isLoadingClientConfigs,
        totalPages: state.config.clientConfigList.totalPages,
        currentPage: state.config.clientConfigList.currentPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        configActions: bindActionCreators(configActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConfigClientContainer);

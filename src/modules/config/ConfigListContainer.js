import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import * as configActions from './configActions';
import ListConfigs from "./ListConfigs";
import {Link} from "react-router";
import Loading from "../../components/common/Loading";
import _ from 'lodash';

class ConfigListContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.deleteConfig = this.deleteConfig.bind(this);
        this.state = {
            page: 1,
            query: ""
        };
        this.timeOut = null;
        this.loadConfigs = this.loadConfigs.bind(this);
    }

    componentWillMount() {
        this.loadConfigs();
    }

    deleteConfig() {

    }

    loadConfigs(page = 1) {
        this.setState({
            page
        });
        this.props.configActions.loadConfigs(page, this.state.query);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">


                    <div className="card">

                        <div className="card-header card-header-icon" data-background-color="rose">
                            <i className="material-icons">assignment</i>
                        </div>

                        <div className="card-content">
                            <h4 className="card-title">Configs</h4>

                            <div style={{marginTop: "15px"}}>
                                <Link to="/config/create" className="btn btn-rose">
                                    Thêm config
                                </Link>
                            </div>

                            {/*<Search*/}
                            {/*onChange={this.basesSearchChange}*/}
                            {/*value={this.state.query}*/}
                            {/*placeholder="Tìm kiếm cơ sở (tên, địa chỉ)"*/}
                            {/*/>*/}

                            {this.props.isLoadingConfigs ? <Loading/> :
                                <ListConfigs
                                    deleteConfig={this.deleteConfig}
                                    configs={this.props.configs}/>}
                        </div>
                    </div>

                    <div className="card-content">
                        <ul className="pagination pagination-primary">
                            {_.range(1, this.props.totalPages + 1).map(page => {
                                if (Number(this.state.page) === page) {
                                    return (
                                        <li key={page} className="active">
                                            <a onClick={() => this.loadConfigs(page)}>{page}</a>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={page}>
                                            <a onClick={() => this.loadConfigs(page)}>{page}</a>
                                        </li>
                                    );
                                }

                            })}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

ConfigListContainer.propTypes = {
    configActions: PropTypes.object.isRequired,
    totalPages: PropTypes.number.isRequired,
    configs: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    isLoadingConfigs: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        configs: state.config.configList.configs,
        totalPages: state.config.configList.totalPages,
        currentPage: state.config.configList.currentPage,
        isLoadingConfigs: state.config.configList.isLoadingConfigs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        configActions: bindActionCreators(configActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigListContainer);
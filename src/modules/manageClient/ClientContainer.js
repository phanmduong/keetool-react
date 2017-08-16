/* eslint-disable no-undef */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Link from "react-router/es/Link";
import Search from "../../components/common/Search";
import ListClient from "./ListClient";
import Loading from "../../components/common/Loading";
import _ from 'lodash';
// Import actions here!!
import * as clientListActions from './clientListActions';
import * as clientActions from './clientActions';
import {confirm} from "../../helpers/helper";


class ClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.clientsSearchChange = this.clientsSearchChange.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.loadClients = this.loadClients.bind(this);
        this.pingClient = this.pingClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.state = {
            page: 1,
            query: ""
        };
        this.timeOut = null;
    }

    componentWillMount() {
        this.loadClients();
    }

    deleteClient(client) {
        confirm("error", "Xoá", "Bạn có chắc chắn muốn xoá cơ sở này",
            function () {
                this.props.clientListActions.deleteClient(client);
            }.bind(this));
    }


    clientsSearchChange(value) {
        this.setState({
            page: 1,
            query: value
        });
        // if (this.timeOut !== null) {
        //     clearTimeout(this.timeOut);
        // }
        // this.timeOut = setTimeout(function () {
        //     this.props.clientListActions.loadClients(this.state.page, this.state.query);
        // }.bind(this), 500);

    }

    loadClients(page = 1) {
        this.setState({page});
        this.props.clientListActions.loadClients(page, this.state.query);
    }

    pingClient(id){
        this.props.clientActions.pingClient(id);
    }

    updateClient(id){
        this.props.clientActions.updateClient(id);
    }



    render() {
        const currentPage = this.state.page;
        return (
            <div id="page-wrapper">
                <div className="container-fluid">


                    <div className="card">

                        <div className="card-header card-header-icon" data-background-color="rose">
                            <i className="material-icons">assignment</i>
                        </div>

                        <div className="card-content">
                            <h4 className="card-title">Khách hàng</h4>

                            <div style={{marginTop: "15px"}}>
                                <Link to="/client/create" className="btn btn-rose">
                                    Thêm khách hàng
                                </Link>
                            </div>

                            <Search
                                onChange={this.clientsSearchChange}
                                value={this.state.query}
                                placeholder="Tìm kiếm khách hàng"
                            />

                            {this.props.isLoadingClients ? <Loading/> :
                                <ListClient
                                    pingClient={this.pingClient}
                                    deleteClient={this.deleteClient}
                                    updateClient={this.updateClient}
                                    handleSwitch={this.handleSwitch}
                                    clients={this.props.clients}/>}
                        </div>
                    </div>

                    <div className="card-content">
                        <ul className="pagination pagination-primary">
                            {_.range(1, this.props.totalPages + 1).map(page => {
                                if (Number(currentPage) === page) {
                                    return (
                                        <li key={page} className="active btn-rose">
                                            <a onClick={() => this.loadClients(page)}>{page}</a>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={page}>
                                            <a onClick={() => this.loadClients(page)}>{page}</a>
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

ClientContainer.propTypes = {
    isLoadingClients: PropTypes.bool.isRequired,
    clients: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    clientListActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        clients: state.clientList.clients,
        isLoadingClients: state.clientList.isLoadingClients,
        totalPages: state.clientList.totalPages,
        currentPage: state.clientList.currentPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientListActions: bindActionCreators(clientListActions, dispatch),
        clientActions: bindActionCreators(clientActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientContainer);
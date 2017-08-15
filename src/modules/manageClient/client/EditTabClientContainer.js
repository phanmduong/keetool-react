/**
 * Created by phanmduong on 8/15/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types'
import EditTabClientComponent from './EditTabClientComponent';
import {bindActionCreators} from 'redux';
import * as clientActions from '../clientActions';

class EditTabClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.changeCheckTab = this.changeCheckTab.bind(this);
        // this.updateFormData = this.updateFormData.bind(this);
    }

    componentWillMount() {
        this.props.clientActions.loadClientTabData(this.props.params.clientId);
    }

    componentDidUpdate() {
        // $('#form-edit-role').validate({
        //     errorPlacement: function (error, element) {
        //         $(element).parent('div').addClass('has-error');
        //     }
        // });
    }

    // updateFormData(event) {
    //     const field = event.target.name;
    //     let roleForm = {...this.props.roleForm};
    //     roleForm[field] = event.target.value;
    //     this.props.roleActions.updateRoleFormData(roleForm);
    // }
    // changeCheckTab(tab){
    //     this.props.tabsActions.changeCheckTab(tab);
    // }
    //
    // editRole(){
    //     this.props.roleActions.editRoleData(this.props.tabsListData, this.props.roleForm);
    // }


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
                                    isLoadingTab = {this.props.isLoadingTab}
                                    tabListData = {this.props.tabListData}
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
};

function mapStateToProps(state) {
    return {
        isLoadingTab: state.client.editTab.isLoadingTab,
        errorLoadingTab: state.client.editTab.errorTab,
        clientFormTab: state.client.clientFormTab,
        tabListData: state.client.tabListData,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clientActions: bindActionCreators(clientActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTabClientContainer);

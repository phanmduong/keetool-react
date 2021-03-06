import React from 'react';
import {Link, browserHistory} from 'react-router';
import Loading from '../../components/common/Loading';
import Search from '../../components/common/Search';
import ListStaff from './ListStaff';
import PropTypes from 'prop-types';
import _ from 'lodash';

class ManageStaffsComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    redirectAddStaff() {
        browserHistory.push('add-staff');
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
                                        <li className="active">
                                            <Link to="manage/quan-li-nhan-su">
                                                Nhân viên
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="manage-role">
                                                 Chức vụ
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
                                                onClick={() => this.redirectAddStaff()}
                                            >
                                                Thêm nhân viên
                                            </button>
                                        </div>
                                        <Search
                                            onChange={this.props.staffsSearchChange}
                                            value={this.props.search}
                                            placeholder="Tìm kiếm nhân viên"
                                            className="col-md-9"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    {this.props.isLoadingStaffs ? <Loading/> : (
                                        <ListStaff
                                            staffs={this.props.staffListData}
                                            roles={this.props.roleListData}
                                            bases={this.props.baseListData}
                                            changeRoleStaff={this.props.changeRoleStaff}
                                            changeBaseStaff={this.props.changeBaseStaff}
                                            deleteStaff={this.props.deleteStaff}
                                        />
                                    )
                                    }
                                </div>
                            </div>
                            <ul className="pagination pagination-primary">
                                {_.range(1, this.props.totalPages + 1).map(page => {
                                    if (Number(this.props.currentPage) === page) {
                                        return (
                                            <li key={page} className="active">
                                                <a onClick={() => this.props.loadStaffs(page)}>{page}</a>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={page}>
                                                <a onClick={() => this.props.loadStaffs(page)}>{page}</a>
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

ManageStaffsComponent.propTypes = {
    isLoadingStaffs: PropTypes.bool.isRequired,
    baseListData: PropTypes.array.isRequired,
    roleListData: PropTypes.array.isRequired,
    staffListData: PropTypes.array.isRequired,
    changeRoleStaff: PropTypes.func.isRequired,
    changeBaseStaff: PropTypes.func.isRequired,
    staffsSearchChange: PropTypes.func.isRequired,
    loadStaffs: PropTypes.func.isRequired,
    deleteStaff: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
};

export default ManageStaffsComponent;

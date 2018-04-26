import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "./issueStore";
import { avatarEmpty } from "../../helpers/helper";
import { NO_AVATAR } from "../../constants/env";
import Loading from "../../components/common/Loading";
import Search from "../../components/common/Search";
import { observable } from "mobx";

@observer
export default class IssuesContainer extends Component {
    @observable search = "";
    constructor(props) {
        super(props);
        this.searchChange = this.searchChange.bind(this);
    }

    componentWillMount() {
        store.loadIssues();
    }

    searchChange(value) {
        this.search = value;
        if (this.timeOut !== null) {
            clearTimeout(this.timeOut);
        }
        this.timeOut = setTimeout(
            function() {
                store.loadIssues();
            }.bind(this),
            500
        );
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header card-header-icon" data-background-color="rose">
                        <i className="material-icons">assignment</i>
                    </div>

                    <div className="card-content">
                        <h4 className="card-title">Báo cáo khách hàng</h4>

                        <Search onChange={this.searchChange} value={this.search} placeholder="Tìm kiếm" />
                        {store.isLoading ? (
                            <Loading />
                        ) : (
                            <div className="table-responsive">
                                <table
                                    className="table table-striped table-no-bordered table-hover"
                                    cellSpacing="0"
                                    width="100%"
                                    style={{ width: "100%" }}>
                                    <thead className="text-rose">
                                        <tr>
                                            <th />
                                            <th>Họ tên</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Khách hàng</th>
                                            <th>Mô tả</th>
                                            <th>Độ ưu tiên</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {store.issues.map(issue => {
                                            const avatar = !avatarEmpty(issue.avatar_url)
                                                ? issue.avatar_url
                                                : NO_AVATAR;
                                            return (
                                                <tr key={issue.id}>
                                                    <td>
                                                        <div
                                                            className="avatar-list-staff"
                                                            style={{
                                                                background:
                                                                    "url(" +
                                                                    avatar +
                                                                    ") center center / cover",
                                                                display: "inline-block"
                                                            }}
                                                        />
                                                    </td>
                                                    <td>{issue.name}</td>
                                                    <td>{issue.email}</td>
                                                    <td>{issue.phone}</td>
                                                    <td>{issue.client ? issue.client.company_name : ""}</td>
                                                    <td>{issue.title}</td>
                                                    <td>{issue.priority}</td>
                                                    <td>{issue.status}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

import React from "react";
import FreeTrialClientStore from "./FreeTrialClientStore";
import { observer } from "mobx-react";
import Pagination from "../../components/common/Pagination";
import Loading from "../../components/common/Loading";

@observer
class FreeTrialClientComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        FreeTrialClientStore.loadClientFreeTrial(1);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="card">
                    <div className="card-content">
                        <h4 className="card-title">
                            <strong style={{ marginLeft: 6 }}>Đăng kí dùng thử</strong>
                        </h4>
                        {FreeTrialClientStore.isLoading ? (
                            <Loading />
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-striped table-no-bordered table-hover">
                                    <thead className="text-rose">
                                        <tr>
                                            <th>Tên</th>
                                            <th>Email</th>
                                            <th>Số điện thoại</th>
                                            <th>Công ty</th>
                                            <th>Người giới thiệu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {FreeTrialClientStore.users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.company}</td>
                                                <td>{user.refer}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <Pagination
                            loadDataPage={page => {
                                FreeTrialClientStore.loadClientFreeTrial(page, FreeTrialClientStore.search);
                            }}
                            totalPages={FreeTrialClientStore.totalPages}
                            currentPage={FreeTrialClientStore.currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeTrialClientComponent;

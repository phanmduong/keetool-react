import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router";
import ButtonGroupAction from '../../components/common/ButtonGroupAction';

class ListClientConfigs extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr className="text-rose">
                        <th>Tên</th>
                        <th>Giá trị</th>
                        <th>Mô tả</th>
                        <th>Loại</th>
                        <th>Bắt buộc</th>
                        <th>Thêm vào lúc</th>
                        <th>Sửa gần nhất</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.clientConfigs.map(config => {
                        return (
                            <tr key={config.id}>
                                <td>{config.name}</td>
                                <td>
                                    <div className="td-long-wrap">
                                        {config.value}
                                    </div>
                                </td>
                                <td>
                                    {config.description}
                                </td>
                                <td>{config.type}</td>
                                <td>{config.is_required ? "Bắt buộc" : "Không bắt buộc"}</td>
                                <td>{config.created_at}</td>
                                <td>{config.updated_at}</td>
                                <td>
                                    <ButtonGroupAction
                                        editUrl={"client-config/" + this.props.clientId + '/' + config.id + "/edit"}
                                        delete={this.props.deleteClientConfig}
                                        object={config}
                                        disabled={Boolean(config.is_required)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

ListClientConfigs.propTypes = {
    deleteClientConfig: PropTypes.func.isRequired,
    clientConfigs: PropTypes.array.isRequired,
    clientId: PropTypes.string.isRequired
};

export default ListClientConfigs;
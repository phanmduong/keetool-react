import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router";
import Switch from 'react-bootstrap-switch';
import ButtonGroupAction from '../../components/common/ButtonGroupAction';

class ListConfigs extends React.Component {
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
                        <th>Mô tả</th>
                        <th>Loại</th>
                        <th>Bắt buộc</th>
                        <th>Thêm vào lúc</th>
                        <th>Sửa gần nhất</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.configs.map(config => {
                        return (
                            <tr key={config.id}>
                                <td>{config.name}</td>
                                <td>{config.description}</td>
                                <td>{config.type}</td>
                                <td>{config.is_required ? "Bắt buộc" : "Không bắt buộc"}</td>
                                <td>{config.created_at}</td>
                                <td>{config.updated_at}</td>

                                <td>
                                    <ButtonGroupAction
                                        editUrl={"config/" + config.id + "/edit"}
                                        delete={this.props.deleteConfig}
                                        object={config}
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

ListConfigs.propTypes = {
    deleteConfig: PropTypes.func.isRequired,
    configs: PropTypes.array.isRequired
};

export default ListConfigs;
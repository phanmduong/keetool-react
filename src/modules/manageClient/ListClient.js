import React from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router";
import ButtonGroupActionClient from './ButtonGroupActionClient';


class ListClient extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr className="text-rose">
                        <th>Tên công ty</th>
                        <th>Địa chỉ</th>
                        <th>Tên chương trình</th>
                        <th>Mã số thuế</th>
                        <th>Địa chỉ IP</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.clients.map(client => {
                        return (
                            <tr key={client.id}>
                                <td>{client.company_name}</td>
                                <td>{client.address}</td>
                                <td>{client.program_name}</td>
                                <td>{client.tax_number}</td>
                                <td>{client.ip}</td>
                                <td>
                                    <ButtonGroupActionClient
                                        editUrl={"client/" + client.id + "/info/edit"}
                                        delete={this.props.deleteClient}
                                        pingClient={this.props.pingClient}
                                        updateClient={this.props.updateClient}
                                        object={client}
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

ListClient.propTypes = {
    deleteClient: PropTypes.func.isRequired,
    pingClient: PropTypes.func.isRequired,
    updateClient: PropTypes.func.isRequired,
    clients: PropTypes.array.isRequired
};

export default ListClient;
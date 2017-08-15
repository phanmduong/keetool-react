/**
 * Created by phanmduong on 8/15/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

class EditClientContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
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
                                            <Link to={'client/'+this.props.params.clientId+'/info/edit'}>
                                                Thông tin
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to={'client/'+this.props.params.clientId+'/tab/edit'}>
                                                Tính năng
                                                <div className="ripple-container"/>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to={'client/'+this.props.params.clientId+'/config/edit'}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

EditClientContainer.propTypes = {
    params: PropTypes.object.isRequired,
};

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditClientContainer);

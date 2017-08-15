import React from 'react';
import FormInputText from '../../../components/common/FormInputText';
import Loading from "../../../components/common/Loading";
import ItemTabParent from '../../../components/common/ItemTabParent';
import PropTypes from 'prop-types';

let self;

class EditTabClientComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isValidRoleTitle: false,
        };
        this.checkValidate = this.checkValidate.bind(this);
        self = this;
    }

    checkValidate() {
        if ($('#form-edit-role').valid()) {
            this.props.editRole();
        }
    }


    render() {
        let {tabListData} = this.props;
        // let {role_title} = this.props.roleForm;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <form id="form-edit-role" onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <div className="card-header card-header-icon" data-background-color="rose">
                                    <i className="material-icons">assignment_turned_in</i>
                                </div>

                                <div className="card-content">
                                    <h4 className="card-title">Sửa tính năng</h4>
                                    {(this.props.isLoadingTab) ? <Loading/> :
                                        <div>
                                            {/*<FormInputText*/}
                                                {/*label="Tên chức vụ"*/}
                                                {/*name="role_title"*/}
                                                {/*updateFormData={this.props.updateFormData}*/}
                                                {/*required={true}*/}
                                                {/*type="text"*/}
                                            {/*/>*/}
                                            <div className="form-group">
                                                {tabListData.map((tab, index) => {
                                                    if (tab.parent_id === 0) {
                                                        return (
                                                            <ItemTabParent
                                                                tab={tab}
                                                                key={index}
                                                                tabsListData={tabListData}
                                                                changeCheckTab={()=>{}}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                            {this.props.isLoadingUpdateRole ?
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-success disabled"
                                                    >
                                                        <i className="fa fa-spinner fa-spin"/> Đang cập nhật
                                                    </button>
                                                )
                                                :
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        onClick={this.checkValidate}
                                                    >
                                                        Cập nhật
                                                    </button>
                                                )}


                                            {this.props.isLoadingDeleteRole ?
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger disabled"
                                                    >
                                                        <i className="fa fa-spinner fa-spin"/> Đang xóa
                                                    </button>
                                                )
                                                :
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={this.props.deleteRole}
                                                    >
                                                        Xóa
                                                    </button>
                                                )}
                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


EditTabClientComponent.propTypes = {

};


export default EditTabClientComponent;

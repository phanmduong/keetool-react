import React from 'react';
import Loading from "../../../../components/common/Loading";
import ItemTabParent from '../../../../components/common/ItemTabParent';
import PropTypes from 'prop-types';

let self;

class EditTabClientComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        self = this;
    }

    // componentDidUpdate(){
    //     $.material.init();
    // }

    render() {
        let {tabListData} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <form  onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                                <div className="card-header card-header-icon" data-background-color="rose">
                                    <i className="material-icons">assignment_turned_in</i>
                                </div>

                                <div className="card-content">
                                    <h4 className="card-title">Sửa tính năng</h4>
                                    {(this.props.isLoadingTab) ? <Loading/> :
                                        <div>
                                            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                                {tabListData.map((tab, index) => {
                                                    if (tab.parent_id === 0) {
                                                        return (
                                                            <ItemTabParent
                                                                tab={tab}
                                                                key={index}
                                                                tabsListData={tabListData}
                                                                changeCheckTab={self.props.changeCheckTab}
                                                            />
                                                        );
                                                    }
                                                })}
                                            </div>
                                            {this.props.isLoadingUpdateTab ?
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-rose disabled"
                                                    >
                                                        <i className="fa fa-spinner fa-spin"/> Đang cập nhật
                                                    </button>
                                                )
                                                :
                                                (
                                                    <button
                                                        type="button"
                                                        className="btn btn-rose"
                                                        onClick={this.props.editTabClient}
                                                    >
                                                        Cập nhật
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
    isLoadingTab: PropTypes.bool.isRequired,
    isLoadingUpdateTab: PropTypes.bool.isRequired,
    tabListData: PropTypes.array.isRequired,
    changeCheckTab: PropTypes.func.isRequired,
    editTabClient: PropTypes.func.isRequired,
};


export default EditTabClientComponent;

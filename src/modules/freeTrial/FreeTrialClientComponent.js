import React from "react";

class FreeTrialClientComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="tab-content">
                            <h4 className="card-title">
                                <strong style={{ marginLeft: 6 }}>Đăng kí dùng thử</strong>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeTrialClientComponent;

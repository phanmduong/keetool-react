import React from 'react';
import PropTypes from 'prop-types';

class Switch extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    componentDidMount() {
        if ($.material) {
            $.material.init();
        }
    }

    render() {
        return (
            <div className="togglebutton">
                <label>
                    <input
                        name={this.props.name}
                        type="checkbox"
                        checked={this.props.value}
                        onChange={this.props.onChange}/>
                    {this.props.value ? this.props.onText : this.props.offText}
                </label>
            </div>
        );
    }
}

Switch.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.bool.isRequired
    ])
};

export default Switch;
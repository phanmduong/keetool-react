import React from 'react';
import PropTypes from 'prop-types';
import FormInputText from "../../../components/common/FormInputText";
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const ConfigForm = ({updateFormData, submit, isSavingClientConfig, type, clientConfig, configs, changeSelect, isLoadingConfigs}) => {
    const {description, value, configId} = clientConfig;
    var options;
    if (isLoadingConfigs) {
        options = [
            {label: 'Đang tải'}
        ]
    } else {
        options = [];
    }
    configs.forEach(function (config) {
        options.push({value: config.id, label: config.name + " - " + config.type, isRequired: config.is_required});
    });
    return (
        <form
            onSubmit={submit}
            role="form"
            id="client-config-form">
            <div className="form-group">
                <label>Chọn key</label>
                <Select
                    name="form-field-name"
                    value={configId}
                    options={options}
                    onChange={changeSelect}
                />
            </div>

            <FormInputText
                placeholder="Nhập giá trị config"
                label="Giá trị"
                name="value"
                updateFormData={updateFormData}
                value={value}
                required={true}/>
            <FormInputText
                placeholder="Nhập mô tả config"
                label="Mô tả"
                name="description"
                updateFormData={updateFormData}
                value={description}
                required={true}/>
            <div>
                {isSavingClientConfig ?
                    (
                        <button
                            type="button"
                            className="btn btn-rose disabled"
                        >
                            <i className="fa fa-spinner fa-spin"/> {type === 'create' ? 'Đang thêm' : 'Đang sửa'}
                        </button>
                    ) :
                    (
                        <button
                            type="submit"
                            className="btn btn-rose">
                            {type === 'create' ? 'Thêm' : 'Sửa'}
                        </button>
                    )}
            </div>
        </form>
    );
};

ConfigForm.propTypes = {
    clientConfig: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    isSavingClientConfig: PropTypes.bool.isRequired,
    isLoadingConfigs: PropTypes.bool.isRequired,
    updateFormData: PropTypes.func.isRequired,
    changeSelect: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    configs: PropTypes.array.isRequired
};

export default ConfigForm;
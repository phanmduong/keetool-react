import React from 'react';
import PropTypes from 'prop-types';
import FormInputText from "../../components/common/FormInputText";
import Select from "../../components/common/Select";
import NewSwitch from "../../components/common/NewSwitch";

const ConfigForm = ({updateFormData, config, submit, isSavingConfig}) => {
    const {name, description, type, isRequired} = config;
    return (
        <form
            onSubmit={submit}
            role="form"
            id="config-form">

            <FormInputText
                placeholder="Nhập tên config"
                label="Tên Config"
                name="name"
                updateFormData={updateFormData}
                value={name}
                required={true}/>
            <FormInputText
                placeholder="Nhập mô tả config"
                label="Mô tả"
                name="description"
                updateFormData={updateFormData}
                value={description}
                required={false}/>
            <NewSwitch
                name="isRequired"
                onChange={updateFormData}
                bsSize="mini"
                onText="Bắt buộc" offText="Không bắt buộc"
                value={isRequired || false}/>

            <Select
                value={type || ""}
                options={[
                    {key: "server", value: "server"},
                    {key: "client", value: "client"},
                    {key: "css", value: "css"}
                ]}
                defaultMessage="Chọn loại config"
                name="type"
                onChange={updateFormData}/>
            <div>
                {isSavingConfig ?
                    (
                        <button
                            type="button"
                            className="btn btn-primary disabled"
                        >
                            <i className="fa fa-spinner fa-spin"/> Đang tải lên
                        </button>
                    ) :
                    (
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Tải lên
                        </button>
                    )}
            </div>
        </form>
    );
};

ConfigForm.propTypes = {
    config: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired,
    isSavingConfig: PropTypes.bool.isRequired,
    updateFormData: PropTypes.func.isRequired
};

export default ConfigForm;
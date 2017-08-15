import React from 'react';
import PropTypes from 'prop-types';
import FormInputText from "../../components/common/FormInputText";

const ClientForm = ({updateFormData, client, submit, isSavingClient}) => {
    const {companyName, address, taxNumber, programName} = client;

    return (
        <form role="form" id="client-form">

            <FormInputText
                placeholder="Nhập tên công ty"
                label="Tên công ty"
                name="company_name"
                updateFormData={updateFormData}
                value={companyName}/>
            <FormInputText
                placeholder="Nhập địa chỉ cơ sở"
                label="Địa chỉ cơ sở"
                name="address"
                updateFormData={updateFormData}
                value={address}/>
            <FormInputText
                placeholder="Nhập mã số thuế"
                label="Mã số thuế"
                name="tax_number"
                updateFormData={updateFormData}
                value={taxNumber}/>
            <FormInputText
                placeholder="Nhập tên chương trình"
                label="Tên chương trình"
                name="program_name"
                updateFormData={updateFormData}
                value={programName}/>
            <div>
                {isSavingClient ?
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
                            type="button"
                            className="btn btn-primary"
                            onClick={submit}>
                            Tải lên
                        </button>
                    )}
            </div>

        </form>
    );
};

ClientForm.propTypes = {
    client: PropTypes.object,
    submit: PropTypes.func.isRequired,
    isSavingClient: PropTypes.bool.isRequired,
    updateFormData: PropTypes.func.isRequired
};

export default ClientForm;
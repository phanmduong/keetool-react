import React from 'react';
import PropTypes from 'prop-types';
import FormInputText from "../../components/common/FormInputText";

const ClientForm = ({updateFormData, client, submit, isSavingClient, configsRequired, updateFormConfigsRequired, ping, statusPing}) => {

    const {companyName, address, taxNumber, programName, ip} = client;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            submit();
        }} role="form" id="client-form">
            <FormInputText
                placeholder="Nhập tên công ty"
                label="Tên công ty"
                name="companyName"
                required={true}
                updateFormData={updateFormData}
                value={companyName}/>
            <FormInputText
                placeholder="Nhập địa chỉ cơ sở"
                label="Địa chỉ cơ sở"
                name="address"
                required={true}
                updateFormData={updateFormData}
                value={address}/>
            <FormInputText
                placeholder="Nhập mã số thuế"
                label="Mã số thuế"
                name="taxNumber"
                required={true}
                updateFormData={updateFormData}
                value={taxNumber}/>
            <FormInputText
                placeholder="Nhập tên chương trình"
                label="Tên chương trình"
                name="programName"
                required={true}
                updateFormData={updateFormData}
                value={programName}/>
            <div className="row">
                <div className="col-md-10 .col-sm-10">
                    <FormInputText
                        placeholder="Nhập địa chỉ IP"
                        label="Địa chỉ IP"
                        name="ip"
                        required={true}
                        updateFormData={updateFormData}
                        value={ip}/>
                </div>
                <div className="col-md-2 col-sm-2">
                    {statusPing === 1 ?
                        (
                            <button
                                type="button"
                                className="btn btn-rose disabled"
                            >
                                Kiểm tra
                            </button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className="btn btn-rose"
                                onClick={() => ping(ip)}
                            >
                                Kiểm tra
                            </button>
                        )

                    }

                </div>
            </div>
            {
                configsRequired.map((config) => {
                    return (
                        <FormInputText
                            key={config.id}
                            label={config.name + " - " + config.type}
                            name="ip"
                            required={true}
                            updateFormData={updateFormConfigsRequired}
                            value={config.value}
                            data={config}
                        />
                    );
                })
            }
            <div>
                {isSavingClient ?
                    (
                        <button
                            type="button"
                            className="btn btn-rose disabled"
                        >
                            <i className="fa fa-spinner fa-spin"/> Đang tải lên
                        </button>
                    ) :
                    (
                        <button
                            type="submit"
                            className="btn btn-rose">
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
    updateFormData: PropTypes.func.isRequired,
    updateFormConfigsRequired: PropTypes.func.isRequired,
    ping: PropTypes.func.isRequired,
    configsRequired: PropTypes.array.isRequired
};

export default ClientForm;
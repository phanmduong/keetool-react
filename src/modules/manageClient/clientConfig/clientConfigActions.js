/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../../constants/actionTypes';
import * as clientConfigApi from './clientConfigApi';
import * as helper from '../../../helpers/helper';
import parallel from 'async/parallel';
/*eslint no-console: 0 */
export function updateClientConfigFormData(clientConfig) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_CLIENT_CONFIG_FORM_DATA,
            clientConfig
        });
    };
}

export function createClientConfig(clientConfig) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_CREATE_CLIENT_CONFIG
        });
        clientConfigApi.addClientConfig(clientConfig)
            .then((res) => {
                helper.showNotification(res.data.data.message);
                dispatch(updateConfigToClient(clientConfig.clientId));
                dispatch({
                    type: types.CREATE_CLIENT_CONFIG_SUCCESS
                });
            }).catch((err) => {
            helper.showNotification('Config đã được tạo', 'top', 'right', 'danger');
            dispatch({
                type: types.CREATE_CLIENT_CONFIG_SUCCESS
            });
            console.log(err);
        });
    };
}

export function updateConfigToClient(clientId) {
    helper.showNotification("Đang cập nhật đến client", 'top', 'right', 'info');
    parallel([
            function (callback) {
                clientConfigApi.writeEnv(clientId)
                    .then((res) => {
                        if (res.data.status === 1) {
                            callback(null, res.data);
                            helper.showNotification('Cập nhật env server thành công');
                        } else {
                            console.log("error update env:", res.data);
                            helper.showNotification('Cập nhật env server lỗi', 'top', 'right', 'danger');
                            callback(res.data);
                        }
                    }).catch((error) => {
                    helper.showNotification('Cập nhật env server lỗi', 'top', 'right', 'danger');
                    console.log(error);
                    callback(error, null);
                });
            },
            function (callback) {
                clientConfigApi.writeEnvClient(clientId)
                    .then((res) => {
                        if (res.data.status === 1) {
                            callback(null, res.data);
                            helper.showNotification('Cập nhật env client thành công');
                        } else {
                            console.log("error update env client:", res.data);
                            helper.showNotification('Cập nhật env client lỗi', 'top', 'right', 'danger');
                            callback(res.data);
                        }

                    }).catch((error) => {
                    helper.showNotification('Cập nhật env client lỗi', 'top', 'right', 'danger');
                    console.log(error);
                    callback(error, null);
                });
            }, function (callback) {
                clientConfigApi.writeEnvCSS(clientId)
                    .then((res) => {
                        if (res.data.status === 1) {
                            callback(null, res.data);
                            helper.showNotification('Cập nhật css thành công');
                        } else {
                            console.log("error update css:", res.data);
                            helper.showNotification('Cập nhật css lỗi', 'top', 'right', 'danger');
                            callback(res.data);
                        }
                    }).catch((error) => {
                    helper.showNotification('Cập nhật css lỗi', 'top', 'right', 'danger');
                    console.log(error);
                    callback(error, null);
                });
            }
        ],
        function (err, results) {
            console.log("result update: ", results);

            if (err) {
                helper.showNotification('Cập nhật xảy ra lỗi', 'top', 'right', 'danger');
            }
        });


}

export function loadClientConfig(clientConfigId) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CLIENT_CONFIG
        });
        clientConfigApi.loadClientConfig(clientConfigId)
            .then((res) => {
                dispatch({
                    type: types.LOAD_CLIENT_CONFIG_SUCCESS,
                    clientConfig: {
                        id: res.data.data.id,
                        value: res.data.data.value,
                        description: res.data.data.description,
                        name: res.data.data.name,
                        is_required: res.data.data.is_required,
                        clientId: res.data.data.client_id,
                        configId: res.data.data.config_id,
                    }
                });
            });
    };
}
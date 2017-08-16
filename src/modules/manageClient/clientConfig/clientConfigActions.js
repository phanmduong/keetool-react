/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../../constants/actionTypes';
import * as clientConfigApi from './clientConfigApi';
import * as helper from '../../../helpers/helper';


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
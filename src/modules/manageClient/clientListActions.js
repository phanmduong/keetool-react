/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as clientApi from './clientApi';
import {showNotification} from "../../helpers/helper";
import * as clientConfigActions from './clientConfig/clientConfigActions';

// import _ from 'lodash';
export function loadClients(page = 1, query = null) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CLIENTS
        });
        clientApi.loadClients(page, query).then(function (res) {
            dispatch({
                type: types.LOAD_CLIENTS_SUCCESS,
                clients: res.data.data.clients,
                // currentPage: res.data.paginator.current_page,
                // totalPages: res.data.paginator.total_pages
            });
        }).catch(error => {
            console.log(error);
        });

    };
}

export function updateCreateClientFormData(client) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_FORM_CREATE_CLIENT_DATA,
            client
        });
    };
}


export function createClient(client, configs) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_CREATE_CLIENT
        });
        clientApi.createClient(client, configs)
            .then((res) => {
                dispatch({
                    type: types.CREATE_CLIENT_SUCCESS
                });
                showNotification("Thêm khách hàng thành công");
                dispatch(clientConfigActions.updateConfigToClient(res.data.data.client.id), dispatch);
                // browserHistory.push('/client/list');
            });
    };
}

export function updateConfigsRequiredForm(config) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_CONFIGS_REQUIRED_FORM,
            config
        });
    };
}

export function deleteClient(client) {
    return function (dispatch) {
        dispatch({
            type: types.DELETE_CLIENT_SUCCESS,
            client
        });
        clientApi.deleteClient(client)
            .then(() => {
                showNotification("Xoá khách hàng thành công");
                // browserHistory.push('/client/list');
            });
    };

}



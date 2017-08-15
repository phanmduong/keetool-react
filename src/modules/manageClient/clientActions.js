/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as clientApi from './clientApi';
import * as helper from '../../helpers/helper';

export function pingClient(id) {
    helper.showNotification("Đang kết nối")
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_PING_CLIENT,
        });
        clientApi.pingClient(id).then(function (res) {
            dispatch(pingClientSuccess(res.data));
        }).catch(error => {
            throw (error);
        });

    };
}

export function pingClientSuccess(data) {
    if (data.status && data.status === 1){
        helper.showNotification("Kết nối thành công");
    }
    return ({
        type: types.PING_CLIENT_SUCCESS,
        status: data.status,
    })
}


export function beginEditRoleData() {
    helper.showNotification("Đang sửa tính năng");
    return {
        type: types.BEGIN_EDIT_CLIENT_TAB_DATA,
        isLoading: true,
        error: false,
    };
}

export function editRoleData(tabs, clientTab) {
    return function (dispatch) {
        dispatch(beginEditRoleData());
        clientApi.editRole(tabs, clientTab)
            .then(function (res) {
                dispatch(editRoleDataSucessful(res));
            }).catch((error) => {
            dispatch(editRoleDataError(error.response.data.error));
            throw (error);
        });
    };
}

export function editRoleDataSucessful() {
    helper.showNotification("Sửa tính năng thành công");
    return (
        {
            type: types.EDIT_CLIENT_TAB_DATA_SUCCESSFUL,
            isLoading: false,
            error: false
        });
}

export function editRoleDataError() {


    helper.showNotification("Sửa tính năng thất bại. Thử lại");

    return ({
        type: types.EDIT_CLIENT_TAB_DATA_ERROR,
        isLoading: false,
        error: true
    });
}


export function beginLoadClientTabData() {
    return {
        type: types.BEGIN_LOAD_CLIENT_TAB_DATA,
        isLoading: true,
        error: false,
        tabListData: [],
        client: {}
    };
}

export function loadClientTabData(clientId) {
    return function (dispatch) {
        dispatch(beginLoadClientTabData());
        clientApi.loadClientTab(clientId)
            .then(function (res) {
                dispatch(loadClientTabDataSucessful(res));
            }).catch(() => {
            dispatch(loadClientTabDataError());
        });
    };
}

export function loadClientTabDataSucessful(res) {
    return (
        {
            type: types.LOAD_CLIENT_TAB_DATA_SUCCESSFUL,
            tabListData: res.data.data.tabs,
            client: res.data.data.client,
            isLoading: false,
            error: false
        })
        ;
}

export function loadClientTabDataError() {
    return (
        {
            type: types.LOAD_CLIENT_TAB_DATA_ERROR,
            isLoading: false,
            error: true
        })
        ;
}




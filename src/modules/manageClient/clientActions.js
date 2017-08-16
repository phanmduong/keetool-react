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
            helper.showNotification("Kết nối thất bại");
            console.log(error);
        });

    };
}

export function pingClientSuccess(data) {
    if (data.status && data.status === 1) {
        helper.showNotification("Kết nối thành công");
    } else {
        helper.showNotification("Kết nối thất bại");
    }
    return ({
        type: types.PING_CLIENT_SUCCESS,
        status: data.status,
    })
}

export function updateClient(id) {
    helper.showNotification("Đang cập nhật")
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_UPDATE_CLIENT,
        });
        clientApi.updateClient(id).then(function (res) {
            dispatch(updateClientSuccess(res.data));
        }).catch(error => {
            console.log(error);
            helper.alertStatus("Cập nhật thất bại", "Thử lại", "error");
        });

    };
}

export function updateClientSuccess(data) {
    var output = "";
    data.output.forEach(function (line) {
        console.log(line);
        if (line.trim().length > 0) {
            output += line + '\n';
        }
    });
    if (data.status && data.status === 1) {
        helper.alertStatus("Cập nhật thành công", output);
    } else {
        helper.alertStatus("Cập nhật thất bại", output, "error");
    }
    return ({
        type: types.UPDATE_CLIENT_SUCCESS,
        status: data.status,
    });
}


export function beginEditTabClientData() {
    helper.showNotification("Đang sửa tính năng");
    return {
        type: types.BEGIN_EDIT_CLIENT_TAB_DATA,
        isLoading: true,
        error: false,
    };
}

export function editTabClientData(tabs, clientId) {
    return function (dispatch) {
        dispatch(beginEditTabClientData());
        clientApi.editClientTab(tabs, clientId)
            .then(function () {
                dispatch(beginSetClientTab(clientId));
            }).catch((error) => {
            dispatch(editTabClientDataError(error.response.data.error));
        });
    };
}

export function beginSetClientTab(clientId) {
    helper.showNotification("Sửa tính năng thành công");
    helper.showNotification("Đang thay đổi tính năng client");
    return function (dispatch) {
        console.log("push server");
        clientApi.setClientTab(clientId)
            .then(function () {
                dispatch(editTabClientDataSucessful());
            }).catch(function () {
            dispatch(editTabClientDataError());
        });
    };
}

export function editTabClientDataSucessful() {
    return (
        {
            type: types.EDIT_CLIENT_TAB_DATA_SUCCESSFUL,
            isLoading: false,
            error: false
        });
}

export function editTabClientDataError() {
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

export function changeCheckTabClient(tab) {
    return ({
            type: types.CHANGE_CHECK_TAB_CLIENT,
            tab: tab
        }
    );
}



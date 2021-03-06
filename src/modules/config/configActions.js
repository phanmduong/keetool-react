/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as configApi from './configApi';
import {browserHistory} from "react-router";
import {showNotification} from "../../helpers/helper";

// import _ from 'lodash';
/*eslint no-console: 0 */
export function loadClientConfigs(clientId, page = 1, query = null) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CLIENT_CONFIGS
        });

        configApi.loadClientConfigs(clientId, page, query).then(function (res) {
            dispatch({
                type: types.LOAD_CLIENT_CONFIGS_SUCCESS,
                clientConfigs: res.data.client_configs,
                currentPage: res.data.paginator.current_page,
                totalPages: res.data.paginator.total_pages
            });
        }).catch(error => {
            console.error(error);
        });

    };
}

export function loadConfigs(page = 1, query = null) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CONFIGS
        });

        configApi.loadConfigs(page, query).then(function (res) {
            dispatch({
                type: types.LOAD_CONFIGS_SUCCESS,
                configs: res.data.configs,
                currentPage: res.data.paginator.current_page,
                totalPages: res.data.paginator.total_pages
            });
        }).catch(error => {
            console.error(error);
        });

    };
}

export function loadConfigAll() {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CONFIGS
        });

        configApi.loadConfigAll().then(function (res) {
            dispatch({
                type: types.LOAD_CONFIGS_SUCCESS,
                configs: res.data.data.configs,
                currentPage: 1,
                totalPages: 1,
            });
        }).catch(error => {
            console.error(error);
        });

    };
}

export function createConfig(config) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_CREATE_CONFIG
        });
        configApi.createConfig(config)
            .then(res => {
                const message = res.data.data.message;
                showNotification(message);
                dispatch({
                    type: types.CREATE_CONFIG_SUCCESS
                });
                browserHistory.push('/config/list');
            });
    };
}

export function loadConfig(configId) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CONFIG
        });
        configApi.loadConfig(configId)
            .then(res => {
                const config = res.data.data;
                dispatch({
                    type: types.LOAD_CONFIG_SUCCESS,
                    config
                });
            });
    };
}

export function resetConfig() {
    return function (dispatch) {
        dispatch({
            type: types.RESET_CREATE_BASE_DATA
        });
    };
}


export function deleteConfig(config) {
    return function (dispatch) {
        dispatch({
            type: types.DELETE_CONFIG_SUCCESS,
            config
        });
        showNotification("Xoá thành công");
        configApi.deleteConfig(config).catch(error => {
            console.log(error);
        });

    };
}

export function updateCreateConfigFormData(config) {
    return function (dispatch) {
        dispatch({
            type: types.UPDATE_CREATE_CONFIG_FORM_DATA,
            config
        });
    };
}


export function deleteClientConfig(clientConfig) {
    return function (dispatch) {
        dispatch({
            type: types.DELETE_CLIENT_CONFIG_SUCCESS,
            clientConfig
        });
        showNotification("Xoá thành công");
        configApi.deleteClientConfig(clientConfig).catch(error => {
            console.log(error);
        });

    };
}

export function getConfigsRequired() {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CONFIGS_REQUIRED
        });

        configApi.loadConfigsRequired().then(function (res) {
            dispatch({
                type: types.LOAD_CONFIGS_REQUIRED_SUCCESS,
                configsRequired: res.data.data,
            });
        }).catch(error => {
            console.error(error);
        });

    };
}
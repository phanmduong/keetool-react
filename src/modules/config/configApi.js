/**
 * Created by phanmduong on 4/6/17.
 */
import axios from 'axios';
import * as env from '../../constants/env';

export function loadConfigs(page = 1, query = null) {
    let url = env.MANAGE_API_URL + "/configs?page=" + page;
    let token = localStorage.getItem('token');
    if (query) {
        url += "&q=" + query;
    }
    if (token) {
        url += "&token=" + token;
    }
    return axios.get(url);
}


export function deleteConfig(config) {
    let url = env.MANAGE_API_URL + "/config/delete/" + config.id;
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url);
}

export function loadConfig(configId) {
    let url = env.MANAGE_API_URL + "/config/" + configId;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}

export function createConfig(config) {
    let url = env.MANAGE_API_URL + "/config/create";
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    console.log(config);
    return axios.post(url, config);
}


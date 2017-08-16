import axios from 'axios';
import * as env from '../../../constants/env';

export function addClientConfig(clientConfig) {
    let url = env.MANAGE_API_URL + "/client/config/create";
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, {
        config_id: clientConfig.configId,
        value: clientConfig.value,
        description: clientConfig.description,
        client_id: clientConfig.clientId,
        id: clientConfig.id
    });
}

export function loadClientConfig(clientConfigId) {
    let url = env.MANAGE_API_URL + "/client-config/"+clientConfigId;
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}
/**
 * Created by phanmduong on 4/6/17.
 */
import axios from 'axios';
import * as env from '../../constants/env';

export function createClient(client) {
    const {companyName, address, taxNumber, programName, ip} = client;
    let url = env.MANAGE_API_URL + "/client/create";
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url, {
        company_name: companyName,
        address,
        tax_number: taxNumber,
        program_name: programName,
        ip: ip
    });
}

export function deleteClient(client) {
    let url = env.MANAGE_API_URL + "/client/delete/" + client.id;
    const token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.post(url);
}

export function loadClients(page = 1, query = null) {
    let url = env.MANAGE_API_URL + "/clients?page=" + page;
    let token = localStorage.getItem('token');
    if (query) {
        url += "&q=" + query;
    }
    if (token) {
        url += "&token=" + token;
    }
    return axios.get(url);
}

export function pingClient(clientId) {
    let url = env.MANAGE_API_URL + "/ping/" + clientId;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}

export function loadClientTab(clientId) {
    let url = env.MANAGE_API_URL + "/get-tabs/" + clientId;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}


export function editClientTab(tabs, clientId) {
    let url = env.MANAGE_API_URL + "/edit-client-tab";
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }

    return axios.post(url, {
        tabs: tabs,
        client_id: clientId
    });
}

export function setClientTab(clientId) {
    let url = env.MANAGE_API_URL + "/set-tabs/" + clientId;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}

export function updateClient(clientId) {
    let url = env.MANAGE_API_URL + "/update/" + clientId;
    let token = localStorage.getItem('token');
    if (token) {
        url += "?token=" + token;
    }
    return axios.get(url);
}


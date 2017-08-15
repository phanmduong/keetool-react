/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as clientApi from './clientApi';

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

export function updateCreateClientFormData() {
    return function () {

    };
}



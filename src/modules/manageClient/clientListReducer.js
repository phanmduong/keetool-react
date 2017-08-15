/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function clientListReducer(state = initialState.clientList, action) {
    switch (action.type) {
        case types.BEGIN_LOAD_CLIENTS:
            return Object.assign({}, state, {
                isLoadingClients: true
            });
        case types.LOAD_CLIENTS_SUCCESS:
            return Object.assign({}, state, {
                isLoadingClients: false,
                clients: action.clients,
                currentPage: action.currentPage,
                totalPages: action.totalPages
            });
   
        default:
            return state;
    }

}
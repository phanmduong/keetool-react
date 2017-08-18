/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function clientListReducer(state = initialState.clientList, action) {
    switch (action.type) {
        case types.DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                clients: state.clients.filter(c => c.id !== action.client.id)
            };
        case types.CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                createClient: {
                    ...state.createClient,
                    isSavingClient: false
                }
            };
        case types.BEGIN_CREATE_CLIENT:
            return {
                ...state,
                createClient: {
                    ...state.createClient,
                    isSavingClient: true
                }
            };
        case types.UPDATE_FORM_CREATE_CLIENT_DATA:
            return {
                ...state,
                createClient: {
                    ...state.createClient,
                    client: action.client
                }
            };
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
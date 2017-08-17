/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../../constants/actionTypes';
import initialState from '../../../reducers/initialState';

export default function clientListReducer(state = initialState.clientConfig, action) {
    switch (action.type) {
        case types.UPDATE_CLIENT_CONFIG_FORM_DATA:
            return {
                ...state,
                clientConfig: action.clientConfig
            };
        case types.CREATE_CLIENT_CONFIG_SUCCESS:
            return {
                ...state,
                isSavingClientConfig: false,
            };
        case types.BEGIN_CREATE_CLIENT_CONFIG:
            return {
                ...state,
                isSavingClientConfig: true
            };
        case types.BEGIN_LOAD_CLIENT_CONFIG:
            return {
                ...state,
                isLoadingClientConfig: true,
            };
        case types.LOAD_CLIENT_CONFIG_SUCCESS:
            return {
                ...state,
                ...{
                    clientConfig: action.clientConfig,
                    isLoadingClientConfig: false
                }

            };

        default:
            return state;
    }

}
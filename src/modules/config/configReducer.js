/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function configReducer(state = initialState.config, action) {
    switch (action.type) {
        case types.BEGIN_LOAD_CONFIG:
            return {
                ...state,
                createConfig: {
                    ...state.createConfig,
                    isLoadingConfig: true,
                }
            };
        case types.LOAD_CONFIG_SUCCESS:
            return {
                ...state,
                createConfig: {
                    ...state.createConfig,
                    isLoadingConfig: false,
                    config: action.config
                }
            };
        case types.CREATE_CONFIG_SUCCESS:
            return {
                ...state,
                createConfig: {
                    ...state.createConfig,
                    isSavingConfig: false,
                    config: {}
                }
            };
        case types.BEGIN_CREATE_CONFIG:
            return {
                ...state,
                createConfig: {
                    ...state.createConfig,
                    isSavingConfig: true
                }
            };
        case types.UPDATE_CREATE_CONFIG_FORM_DATA:
            return {
                ...state,
                createConfig: {
                    ...state.createConfig,
                    config: action.config
                }
            };
        case types.BEGIN_LOAD_CONFIGS:
            return {
                ...state,
                configList: {
                    ...state.configList,
                    isLoadingConfigs: true
                }
            };
        case types.LOAD_CONFIGS_SUCCESS:
            return {
                ...state,
                configList: {
                    ...state.configList,
                    isLoadingConfigs: false,
                    configs: action.configs,
                    currentPage: action.currentPage,
                    totalPages: action.totalPages
                }
            };
        default:
            return state;
    }

}
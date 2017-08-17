/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

var configs; // eslint-disable-line
export default function configReducer(state = initialState.config, action) {
    switch (action.type) {
        case types.DELETE_CLIENT_CONFIG_SUCCESS:
            return {
                ...state,
                clientConfigList: {
                    ...state.clientConfigList,
                    clientConfigs: state.clientConfigList.clientConfigs.filter(c => {
                        return c.id !== action.clientConfig.id;
                    }),
                }
            };
        case types.LOAD_CLIENT_CONFIGS_SUCCESS:
            return {
                ...state,
                clientConfigList: {
                    ...state.clientConfigList,
                    clientConfigs: action.clientConfigs,
                    isLoadingClientConfigs: false,
                    totalPages: action.totalPages,
                    currentPage: action.currentPage
                }
            };
        case types.BEGIN_LOAD_CLIENT_CONFIGS:
            return {
                ...state,
                clientConfigList: {
                    ...state.clientConfigList,
                    isLoadingClientConfigs: true
                }
            };
        case types.DELETE_CONFIG_SUCCESS:
            return {
                ...state,
                configList: {
                    ...state.configList,
                    configs: state.configList.configs.filter(c => c.id !== action.config.id)
                }
            };
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
        case types.BEGIN_LOAD_CONFIGS_REQUIRED:
            return {
                ...state,
                configsRequired: {
                    ...state.configList,
                    isLoadingConfigsRequired: true
                }
            };
        case types.LOAD_CONFIGS_REQUIRED_SUCCESS:
            return {
                ...state,
                configsRequired: {
                    ...state.configList,
                    isLoadingConfigsRequired: false,
                    configs: action.configsRequired
                }
            };
        case types.UPDATE_CONFIGS_REQUIRED_FORM:
            configs = changeConfigsRequired(state.configsRequired.configs, action.config);
            return {
                ...state,
                configsRequired: {
                    ...state.configList,
                    isLoadingConfigsRequired: false,
                    configs: configs
                }
            };
        default:
            return state;
    }
}

function changeConfigsRequired(configs, configData) {
    if (configs){
        return configs.map((config)=>{
            if (config.id === configData.id){
                return {
                    ...config,
                    ...configData
                };
            }
            return config;
        })
    }
    return configs;
}
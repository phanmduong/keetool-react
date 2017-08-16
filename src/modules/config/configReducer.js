/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function configReducer(state = initialState.config, action) {
    switch (action.type) {
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
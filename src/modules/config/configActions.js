/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as configApi from './configApi';
// import {browserHistory} from "react-router";
// import {showNotification} from "../../helpers/helper";

// import _ from 'lodash';
export function loadConfigs(page = 1, query = null) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CONFIGS
        });

        configApi.loadConfigs(page, query).then(function (res) {
            dispatch({
                type: types.LOAD_CONFIGS_SUCCESS,
                configs: res.data.configs,
                currentPage: res.data.paginator.current_page,
                totalPages: res.data.paginator.total_pages
            });
        }).catch(error => {
            console.error(error);
        });

    };
}



/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as config from './configApi';
// import {browserHistory} from "react-router";
// import {showNotification} from "../../helpers/helper";

// import _ from 'lodash';
export function loadClients(page = 1, query = null) {
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_LOAD_CLIENTS
        });

    };
}


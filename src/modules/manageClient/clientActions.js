/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import * as clientApi from './clientApi';
import * as helper from '../../helpers/helper';

export function pingClient(id) {
    helper.showNotification("Đang kết nối")
    return function (dispatch) {
        dispatch({
            type: types.BEGIN_PING_CLIENT,
        });
        clientApi.pingClient(id).then(function (res) {
            dispatch(pingClientSuccess(res.data));
        }).catch(error => {
            throw (error);
        });

    };
}

export function pingClientSuccess(data) {
    if (data.status && data.status === 1){
        helper.showNotification("Kết nối thành công");
    }
    return ({
        type: types.PING_CLIENT_SUCCESS,
        status: data.status,
    })
}




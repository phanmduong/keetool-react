/**
 * Created by phanmduong on 4/6/17.
 */
import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

export default function configReducer(state = initialState.config, action) {
    switch (action.type) {
        case types.CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                createClient: {
                    ...state.createClient,
                    isSavingClient: false
                }
            };
        default:
            return state;
    }

}
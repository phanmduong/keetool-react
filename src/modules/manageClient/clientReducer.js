import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';

let tabListData;
export default function tabsReducer(state = initialState.client, action) {

    switch (action.type) {
        case types.BEGIN_LOAD_CLIENT_TAB_DATA:
            return {
                ...state,
                ...{
                    isLoadingTab: action.isLoading,
                    errorLoadingTab: action.error
                }
            };
        case types.LOAD_CLIENT_TAB_DATA_SUCCESSFUL:
            return {
                ...state,
                ...{
                    tabListData: action.tabListData,
                    isLoadingTab: action.isLoading,
                    errorLoadingTab: action.error
                }
            };
        case types.LOAD_CLIENT_TAB_DATA_ERROR:
            return {
                ...state,
                ...{
                    tabListData: action.tabListData,
                    isLoadingTab: action.isLoading,
                    errorLoadingTab: action.error
                }
            };
        case types.BEGIN_EDIT_CLIENT_TAB_DATA:
            return {
                ...state,
                ...{
                    isLoadingUpdateTab: action.isLoading,
                    errorUpdateTab: action.error
                }
            };
        case types.EDIT_CLIENT_TAB_DATA_SUCCESSFUL:
            return {
                ...state,
                ...{
                    isLoadingUpdateTab: action.isLoading,
                    errorUpdateTab: action.error
                }
            };
        case types.EDIT_CLIENT_TAB_DATA_ERROR:
            return {
                ...state,
                ...{
                    isLoadingUpdateTab: action.isLoading,
                    errorUpdateTab: action.error
                }
            };
        case types.CHANGE_CHECK_TAB_CLIENT:
            tabListData = changeCheckTab(state.tabListData, action.tab);
            return {
                ...state,
                ...{
                    tabListData: tabListData
                }
            };
        default:
            return state;
    }
}

function changeCheckTab(tabListData, tab) {
    if (tabListData) {
        return tabListData.map((tabItem) => {
            if (tabItem.id === tab.id) {
                return {
                    ...tabItem,
                    ...tab
                };
            } else {
                return tabItem;
            }
        });
    }

    return tabListData;
}

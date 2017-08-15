import * as types from '../../constants/actionTypes';
import initialState from '../../reducers/initialState';
import _ from 'lodash';

// let tabListData;
export default function tabsReducer(state = initialState.client, action) {

    switch (action.type) {
        case types.BEGIN_LOAD_CLIENT_TAB_DATA:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingTab: action.isLoading,
                            errorTab: action.error
                        }
                    },
                    clientFormTab: action.tab
                }
            };
        case types.LOAD_CLIENT_TAB_DATA_SUCCESSFUL:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingTab: action.isLoading,
                            errorTab: action.error
                        }
                    },
                    clientFormTab: action.tab,
                    tabListData: action.tabListData
                }
            };
        case types.LOAD_CLIENT_TAB_DATA_ERROR:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingTab: action.isLoading,
                            errorTab: action.error
                        }
                    }
                }
            };
        case types.BEGIN_EDIT_CLIENT_TAB_DATA:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingUpdateTab: action.isLoading,
                            errorUpdateTab: action.error
                        }
                    }
                }
            };
        case types.EDIT_CLIENT_TAB_DATA_SUCCESSFUL:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingUpdateTab: action.isLoading,
                            errorUpdateTab: action.error
                        }
                    }
                }
            };
        case types.EDIT_CLIENT_TAB_DATA_ERROR:
            return {
                ...state,
                ...{
                    editTab: {
                        ...state.editTab,
                        ...{
                            isLoadingUpdateTab: action.isLoading,
                            errorUpdateTab: action.error
                        }
                    }
                }
            };
        default:
            return state;
    }
}

function changeDataTabs(tabListData, tabId) {
    if (tabListData) {
        let tabs = [...tabListData];
        _.remove(tabs, function (tab) {
            return tab.id === tabId;
        });

        return tabs;
    }
    return tabListData;
}

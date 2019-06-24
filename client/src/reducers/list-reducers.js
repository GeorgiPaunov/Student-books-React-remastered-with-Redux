import { FETCH_LISTS_SUCCESS, FETCH_LISTS_ERROR,
        FETCH_LIST_DETAILS_SUCCESS, FETCH_LIST_DETAILS_ERROR,
        DELETE_LIST_SUCCESS, DELETE_LIST_ERROR } from '../actions/action-types';

function fetchListsReducer (state = { lists: [], isLoading: true }, action) {
    switch(action.type) {
        case FETCH_LISTS_SUCCESS:
            return { ...state, ...{ lists: action.lists, isLoading: false } };
        case FETCH_LISTS_ERROR:
            return { ...state, ...{ lists: [], isLoading: false } };
        default:
            return state;
    }
}

function fetchListDetailsReducer(state = { list: {}, isLoading: true, success: false }, action) {
    switch (action.type) {
        case FETCH_LIST_DETAILS_SUCCESS:
            return { ...state, ...{ list: action.list, isLoading: false, success: true } };
        case FETCH_LIST_DETAILS_ERROR:
            return { ...state, ...{ list: {}, isLoading: false, success: false } };
        default:
            return state;
    }
}

function listReducer(state = { success: false }, action) {
    switch (action.type) {
        case DELETE_LIST_SUCCESS:
            return Object.assign({}, state, { success: true });
        case DELETE_LIST_ERROR:
            return Object.assign({}, state, { success: false });
        default:
            return state;
    }
}

export {
    fetchListsReducer,
    fetchListDetailsReducer,
    listReducer
};
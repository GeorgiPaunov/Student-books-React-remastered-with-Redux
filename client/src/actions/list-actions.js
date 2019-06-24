import { FETCH_LISTS_SUCCESS, FETCH_LISTS_ERROR,
        FETCH_LIST_DETAILS_SUCCESS, FETCH_LIST_DETAILS_ERROR, 
        DELETE_LIST_SUCCESS, DELETE_LIST_ERROR } from './action-types';
import { toast } from 'react-toastify';
import ListService from '../services/list-service';

const listService = new ListService();

function fetchListsSuccess(lists) {
    return {
        type: FETCH_LISTS_SUCCESS,
        lists
    };
}

function fetchListsError(error) {
    return {
        type: FETCH_LISTS_ERROR,
        error
    };
}

function fetchListsAction() {
    return (dispatch) => {
        return listService.getMyLists(getToken())
            .then(json => {
                if (json.lists) {
                    const lists = json.lists.sort((a, b) => a.title.localeCompare(b.title));
                    dispatch(fetchListsSuccess(lists));
                } else {
                    toast.error(json.message);
                    dispatch(fetchListsError(json.message));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(fetchListsError(err));
            });
    }
}

function fetchListDetailsSuccess(list) {
    return {
        type: FETCH_LIST_DETAILS_SUCCESS,
        list
    };
}

function fetchListDetailsError(error) {
    return {
        type: FETCH_LIST_DETAILS_ERROR,
        error
    };
}

function fetchListDetailsAction(id) {
    return (dispatch) => {
        return listService.getDetails(id, getToken())
            .then(json => {
                if (json.list) {
                    dispatch(fetchListDetailsSuccess(json.list));
                } else {
                    toast.error(json.message);
                    dispatch(fetchListDetailsError(json.message));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(fetchListDetailsError(err));
            });
    }
}

function deleteListSuccess(list) {
    return {
        type: DELETE_LIST_SUCCESS,
        list
    };
}

function deleteListError(error) {
    return {
        type: DELETE_LIST_ERROR,
        error
    };
}

function deleteListAction(id) {
    return (dispatch) => {
        return listService.delete(id, getToken())
            .then(json => {
                if (json.list) {
                    toast.success(json.message);
                    dispatch(deleteListSuccess(json.list));
                } else {
                    toast.error(json.message);
                    dispatch(deleteListError(json.message));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(deleteListError(err));
            });
    }
}

function removeFromListAction(data) {
    return () => {
        return listService.removeBookFromList(getToken(), data)
            .then(json => {
                if (json.list) {
                    toast.success(json.message);
                } else {
                    toast.error(json.message);
                }
            })
            .catch(err => {
                toast.error(err);
            });
    }
}

function addToListAction(data) {
    return () => {
        return listService.addBookToList(getToken(), data)
            .then(json => {
                if (json.list) {
                    toast.success(json.message);
                } else {
                    toast.error(json.message);
                }
            })
            .catch(err => {
                toast.error(err);
            });
    }
}

function getToken() {
    return sessionStorage.getItem("token");
}

export {
    fetchListsAction,
    fetchListDetailsAction,
    deleteListAction,
    removeFromListAction,
    addToListAction
};
import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, 
        FETCH_BOOK_DETAILS_SUCCESS, FETCH_BOOK_DETAILS_ERROR,
        CREATE_BOOK_SUCCESS, CREATE_BOOK_ERROR,
        EDIT_BOOK_SUCCESS, EDIT_BOOK_ERROR, 
        DELETE_BOOK_SUCCESS, DELETE_BOOK_ERROR } from '../actions/action-types';

function fetchBooksReducer(state = { books: [], isLoading: true }, action) {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS:
            return { ...state, ...{ books: action.books, isLoading: false } };
        case FETCH_BOOKS_ERROR:
            return { ...state, ...{ books: [], isLoading: false } };
        default:
            return state;
    }
};

function fetchBookDetailsReducer(state = { book: {}, isLoading: true, success: false }, action) {
    switch (action.type) {
        case FETCH_BOOK_DETAILS_SUCCESS:
            return { ...state, ...{ book: action.book, isLoading: false, success: true } };
        case FETCH_BOOK_DETAILS_ERROR:
            return { ...state, ...{ book: {}, isLoading: false, success: false } };
        default:
            return state;
    }
}

function bookReducer(state = { success: false }, action) {
    switch (action.type) {
        case CREATE_BOOK_SUCCESS:
        case EDIT_BOOK_SUCCESS:
        case DELETE_BOOK_SUCCESS:
            return Object.assign({}, state, { success: true });
        case CREATE_BOOK_ERROR:
        case EDIT_BOOK_ERROR:
        case DELETE_BOOK_ERROR:
            return Object.assign({}, state, { success: false });
        default:
            return state;
    }
}

export {
    fetchBooksReducer,
    fetchBookDetailsReducer,
    bookReducer
};
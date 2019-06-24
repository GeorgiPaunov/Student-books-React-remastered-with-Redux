import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR,
        FETCH_BOOK_DETAILS_SUCCESS, FETCH_BOOK_DETAILS_ERROR, 
        CREATE_BOOK_SUCCESS, CREATE_BOOK_ERROR, 
        EDIT_BOOK_SUCCESS, EDIT_BOOK_ERROR, 
        DELETE_BOOK_SUCCESS, DELETE_BOOK_ERROR } from './action-types';
import { toast } from 'react-toastify';
import BookService from '../services/book-service';

const bookService = new BookService();

function fetchBooksSuccess(books) {
    return {
        type: FETCH_BOOKS_SUCCESS,
        books
    };
}

function fetchBooksError (error) {
    return {
        type: FETCH_BOOKS_ERROR,
        error
    };
}

function fetchBooksAction() {
    return (dispatch) => {
        return bookService.getAllBooks()
            .then(json => {
                if (json.books) {
                    const books = json.books.sort((a, b) => (
                        a.grade - b.grade ||
                        a.subject.localeCompare(b.subject) ||
                        a.publisher.localeCompare(b.publisher)
                    ));
                    
                    dispatch(fetchBooksSuccess(books));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(fetchBooksError(err));
            });
    }
}

function fetchBookDetailsSuccess(book) {
    return {
        type: FETCH_BOOK_DETAILS_SUCCESS,
        book
    };
}

function fetchBookDetailsError(error) {
    return {
        type: FETCH_BOOK_DETAILS_ERROR,
        error
    };
}

function fetchBookDetailsAction(id) {
    return (dispatch) => {
        return bookService.getDetails(id, getToken())
            .then(json => {
                if (json.book) {
                    dispatch(fetchBookDetailsSuccess(json.book));
                } else {
                    toast.error(json.message);
                    dispatch(fetchBookDetailsError(json.message));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(fetchBookDetailsError(err));
            });
    }
}

function createBookSuccess(book) {
    return {
        type: CREATE_BOOK_SUCCESS,
        book
    };
}

function createBookError(error) {
    return {
        type: CREATE_BOOK_ERROR,
        error
    };
}

function createBookAction(data) {
    return (dispatch) => {
        return bookService.create(getToken(), data)
            .then(json => {
                if (json.book) {
                    toast.success(json.message);
                    dispatch(createBookSuccess(json.book));
                } else {
                    if (json.errors) {
                        Object.values(json.errors).forEach(error => toast.error(error));
                        dispatch(createBookError(json.errors[0]));
                    } else {
                        toast.error(json.message);
                        dispatch(createBookError(json.message));
                    }
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(createBookError(err));
            });
    }
}

function editBookSuccess(book) {
    return {
        type: EDIT_BOOK_SUCCESS,
        book
    };
}

function editBookError(error) {
    return {
        type: EDIT_BOOK_ERROR,
        error
    };
}

function editBookAction(id, data) {
    return (dispatch) => {
        return bookService.edit(id, getToken(), data)
            .then(json => {
                if (json.book) {
                    toast.success(json.message);
                    dispatch(editBookSuccess(json.book));
                } else {
                    if (json.errors) {
                        Object.values(json.errors).forEach(error => toast.error(error));
                        dispatch(editBookError(json.errors[0]));
                    } else {
                        toast.error(json.message);
                        dispatch(editBookError(json.message));
                    }
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(editBookError(err));
            });
    }
}

function deleteBookSuccess(book) {
    return {
        type: DELETE_BOOK_SUCCESS,
        book
    };
}

function deleteBookError(error) {
    return {
        type: DELETE_BOOK_ERROR,
        error
    };
}

function deleteBookAction(id) {
    return (dispatch) => {
        return bookService.delete(id, getToken())
            .then(json => {
                if (json.book) {
                    toast.success(json.message);
                    dispatch(deleteBookSuccess(json.book));
                } else {
                    toast.error(json.message);
                    dispatch(deleteBookError(json.message));
                }
            })
            .catch(err => {
                toast.error(err);
                dispatch(deleteBookError(err));
            });
    }
}

function getToken() {
    return sessionStorage.getItem("token");
}

export {
    fetchBooksAction,
    fetchBookDetailsAction,
    createBookAction,
    editBookAction,
    deleteBookAction
};
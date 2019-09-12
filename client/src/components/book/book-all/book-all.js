import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBooksAction } from '../../../actions/book-actions';
import BookItem from './book-item';

import './book-all.css';

class BookAll extends Component {
    render() {
        const { books, isLoading } = this.props;

        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        if (!books.length) {
            return <h3>There are currently no Student Books</h3>;
        }

        return (
            <Fragment>
                <h1>All Student Books</h1>
                <ul className="books">
                    {
                        books.map(book => <BookItem key={book._id} {...this.props} {...book}/>)
                    }
                </ul>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.fetchBooks();
    }
}

function mapStateToProps(state) {
    return {
        books: state.fetchBooksReducer.books,
        isLoading: state.fetchBooksReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBooks: () => dispatch(fetchBooksAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookAll);
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBooksAction } from '../../../actions/book-actions';
import BookItem from './book-item';

class BookAll extends Component {
    render() {
        if (this.props.isLoading) {
            return <h2>Loading...</h2>;
        }

        const books = this.props.books;

        return (
            <Fragment>
                <h1>All Student Books</h1>
                {
                    books.length
                        ?
                        <ul className="books">
                            {
                                books.map(book => <BookItem key={book._id} {...this.props} {...book}/>)
                            }
                        </ul>
                        :
                        <h3>There are currently no Student Books</h3>
                }
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetailsAction, deleteBookAction } from '../../../actions/book-actions';

class BookDelete extends Component {
    handleForm = (evt) => {
        evt.preventDefault();

        const id = this.props.match.params.id;

        this.props.deleteBook(id)
            .then(() => {
                if (this.props.deleteSuccess) {
                    this.props.history.push("/");
                }
            });
    }

    render() {
        if (this.props.isLoading) {
            return <h2>Loading...</h2>
        }

        const book = this.props.book;

        return (
            <div className="form">
            <h1>Delete Student Book</h1>
            <form onSubmit={this.handleForm}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={book.title}
                    disabled
                />

                <label htmlFor="grade">Grade</label>
                <input
                    type="number"
                    id="grade"
                    value={book.grade}
                    disabled
                />

                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    value={book.subject}
                    disabled
                />

                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={book.author}
                    disabled
                />

                <label htmlFor="publisher">Publisher</label>
                <input
                    type="text"
                    id="publisher"
                    value={book.publisher}
                    disabled
                />

                <label htmlFor="year">Year</label>
                <input
                    type="number"
                    id="year"
                    value={book.year}
                    disabled
                />

                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={book.imageUrl}
                    disabled
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    step="0.1"
                    id="price"
                    value={book.price}
                    disabled
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={book.description}
                    disabled
                />

                <button className="btn delete-btn" type="submit">Delete</button>
            </form>
        </div>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        
        this.props.fetchDetails(id)
            .then(() => {
                if (!this.props.fetchSuccess) {
                    this.props.history.push("/");
                }
            });
    }
}

function mapStateToProps(state) {
    return {
        book: state.fetchBookDetailsReducer.book,
        isLoading: state.fetchBookDetailsReducer.isLoading,
        fetchSuccess: state.fetchBookDetailsReducer.success,
        deleteSuccess: state.bookReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(fetchBookDetailsAction(id)),
        deleteBook: (id) => dispatch(deleteBookAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDelete);
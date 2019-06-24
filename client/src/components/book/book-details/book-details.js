import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetailsAction } from '../../../actions/book-actions';
import './book-details.css';

class BookDetails extends Component {
    render() {
        if (this.props.isLoading) {
            return <h2>Loading...</h2>;
        }

        const { book } = this.props;

        return(
            <div className="content">
                <div className="book-image">
                    <img src={book.imageUrl} alt="book"/>
                </div>
                <div className="book-details">
                    <div className="detail-row"><h2>Title</h2><h4>{book.title}</h4></div>
                    <div className="detail-row"><h2>grade</h2><h4>{book.grade}</h4></div>
                    <div className="detail-row"><h2>Author</h2><h4>{book.author}</h4></div>
                    <div className="detail-row"><h2>Subject</h2><h4>{book.subject}</h4></div>
                    <div className="detail-row"><h2>year</h2><h4>{book.year}</h4></div>
                    <div className="detail-row"><h2>publisher</h2><h4>{book.publisher}</h4></div>
                    <div className="detail-row"><h2>Price</h2><h4>{book.price.toFixed(2)} lv.</h4></div>
                </div>
                <div className="book-description">
                    <div className="description-header"><h2>Description</h2></div>
                    {book.description}
                </div>
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
        fetchSuccess: state.fetchBookDetailsReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(fetchBookDetailsAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
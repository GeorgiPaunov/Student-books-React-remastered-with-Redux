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

        if (!book.price) {
            return null;
        }

        return(
            <div className="details-card">
                <section className="book-picture">
                    <img src={book.imageUrl} alt="book"/>
                </section>
                <section className="book-info">
                    <section className="book-data">
                        <div className="data-row">
                            <h3>title</h3>
                            <h4>{book.title}</h4>
                        </div>
                        <div className="data-row">
                            <h3>grade</h3>
                            <h4>{book.grade}</h4>
                        </div>
                        <div className="data-row">
                            <h3>author</h3>
                            <h4>{book.author}</h4>
                        </div>
                        <div className="data-row">
                            <h3>subject</h3>
                            <h4>{book.subject}</h4>
                        </div>
                        <div className="data-row">
                            <h3>year</h3>
                            <h4>{book.year}</h4>
                        </div>
                        <div className="data-row">
                            <h3>publisher</h3>
                            <h4>{book.publisher}</h4>
                        </div>
                        <div className="data-row">
                            <h3>price</h3>
                            <h4>{book.price.toFixed(2)} lv.</h4>
                        </div>
                    </section>
                    <section className="book-description">
                        <header className="description-header">
                            <h2>description</h2>
                        </header>
                        <main className="description-main">
                            <p>{book.description}</p>
                        </main>
                    </section>
                </section>
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
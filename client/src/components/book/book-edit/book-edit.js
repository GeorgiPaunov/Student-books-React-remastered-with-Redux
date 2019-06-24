import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBookDetailsAction, editBookAction } from '../../../actions/book-actions';
import '../../form.css';

class BookEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            grade: "",
            subject: "",
            author: "",
            publisher: "",
            year: "",
            description: "",
            imageUrl: "",
            price: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    handleChange(evt) {
        const { value, id } = evt.target;

        this.setState({
            [id]: value
        });
    }

    handleForm(evt) {
        evt.preventDefault();

        const id = this.props.match.params.id;

        this.props.editBook(id, this.state)
            .then(() => {
                if (this.props.editSuccess) {
                    this.props.history.push("/");
                }
            });
    }

    render() {
        if (this.props.isLoading) {
            return <h2>Loading...</h2>
        }

        return(
            <div className="form">
                <h1>Edit Student Book</h1>
                <form onSubmit={this.handleForm}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="grade">Grade</label>
                    <input
                        type="number"
                        id="grade"
                        value={this.state.grade}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        value={this.state.subject}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="publisher">Publisher</label>
                    <input
                        type="text"
                        id="publisher"
                        value={this.state.publisher}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="year">Year</label>
                    <input
                        type="number"
                        id="year"
                        value={this.state.year}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="imageUrl">Image</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={this.state.imageUrl}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        step="0.1"
                        id="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea 
                        id="description" 
                        value={this.state.description}
                        onChange={this.handleChange} 
                    />

                    <button id="edit" type="submit">Edit</button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.fetchDetails(id)
            .then(() => {
                if (this.props.fetchSuccess) {
                    const book = this.props.book;

                    this.setState({
                        title: book.title,
                        grade: book.grade,
                        subject: book.subject,
                        author: book.author,
                        publisher: book.publisher,
                        year: book.year,
                        description: book.description,
                        imageUrl: book.imageUrl,
                        price: book.price
                    });
                } else {
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
        editSuccess: state.bookReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(fetchBookDetailsAction(id)),
        editBook: (id, data) => dispatch(editBookAction(id, data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
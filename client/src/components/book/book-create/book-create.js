import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBookAction } from '../../../actions/book-actions'
import '../../form.css';

class BookCreate extends Component {
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
        const {value, id} = evt.target;

        this.setState({
            [id]: value
        });
    }

    handleForm(evt) {
        evt.preventDefault();

        this.props.createBook(this.state)
            .then(() => {
                if (this.props.createSuccess) {
                    this.props.history.push("/");
                }
            });
    }

    render() {
        return (
            <div className="form">
                <h1>Create Student Book</h1>
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

                    <button type="submit">Create</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        createSuccess: state.bookReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createBook: (data) => dispatch(createBookAction(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCreate);
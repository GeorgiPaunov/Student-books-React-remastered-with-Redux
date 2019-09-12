import React from 'react';

import './book-item.css';

const BookItem = (props) => {
    const username = sessionStorage.getItem("username");
    const isAdmin = JSON.parse(sessionStorage.getItem("isAdmin"));

    function getDetails(id) {
        props.history.push(`/books/details/${id}`);
    }

    function getEdit(id) {
        props.history.push(`/books/edit/${id}`);
    }

    function getDelete(id) {
        props.history.push(`/books/delete/${id}`);
    }

    return (
        <li className="book">
            <article className="book-card">
                <header className="card-header">
                    <h3>{props.title}</h3>
                    <h3>{props.grade}. grade</h3>
                </header>
                <section className="card-picture">
                    <img src={props.imageUrl} alt="book"/>
                </section>
                <footer className="card-footer">
                    {
                        username
                            ? <span className="buttons">
                                <button className="btn standart-btn" onClick={() => getDetails(props._id)}>Details</button>
                                <button className="btn standart-btn" onClick={() => props.addToList(props._id)}>Add</button>
                              </span>
                            : null
                    }
                    {
                        isAdmin
                            ? <span className="buttons">
                                <button className="btn edit-btn" onClick={() => getEdit(props._id)}>Edit</button>
                                <button className="btn delete-btn" onClick={() => getDelete(props._id)}>Delete</button>
                              </span>
                            : null
                    }
                </footer>
            </article>
        </li>
    );
}

export default BookItem;
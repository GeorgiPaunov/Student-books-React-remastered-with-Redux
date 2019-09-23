import React from 'react';
import './list-item.css';

const ListItem = (props) => {
    return (
        <li className="list-item">
            <article className="item-card">
                <section className="item-image">
                    <img src={props.imageUrl} alt="book"/>
                </section>
                <section className="item-main">
                    <section className="item-data">
                        <div className="item-row">
                            <h3>title</h3>
                            <h4>{props.title}</h4>
                        </div>
                        <div className="item-row">
                            <h3>grade</h3>
                            <h4>{props.grade}</h4>
                        </div>
                        <div className="item-row">
                            <h3>publisher</h3>
                            <h4>{props.publisher}</h4>
                        </div>
                        <div className="item-row">
                            <h3>author</h3>
                            <h4>{props.author}</h4>
                        </div>
                        <div className="item-row">
                            <h3>year</h3>
                            <h4>{props.year}</h4>
                        </div>
                        <div className="item-row">
                            <h3>price</h3>
                            <h4>{props.price.toFixed(2)} lv.</h4>
                        </div>
                    </section>
                    <section className="item-delete">
                        <button className="btn delete-btn" onClick={() => props.removeFromList(props._id)}>Remove book</button>
                    </section>
                </section>
            </article>
        </li>
    );
};

export default ListItem;
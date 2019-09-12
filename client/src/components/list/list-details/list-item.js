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
                        <button className="btn delete-btn" id="delete" onClick={() => props.removeFromList(props._id)}>Remove book</button>
                    </section>
                </section>
            </article>
        </li>
    );

    // return(
    //     <li className="details-card">
    //         <section className="book-picture">
    //             <img src={book.imageUrl} alt="book"/>
    //         </section>
    //         <section className="book-info">
    //             <section className="book-data">
    //                 <div className="data-row">
    //                     <h3>title</h3>
    //                     <h4>{book.title}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>grade</h3>
    //                     <h4>{book.grade}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>author</h3>
    //                     <h4>{book.author}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>subject</h3>
    //                     <h4>{book.subject}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>year</h3>
    //                     <h4>{book.year}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>publisher</h3>
    //                     <h4>{book.publisher}</h4>
    //                 </div>
    //                 <div className="data-row">
    //                     <h3>price</h3>
    //                     <h4>{book.price.toFixed(2)} lv.</h4>
    //                 </div>
    //             </section>
    //             <section className="book-description">
    //                 <header className="description-header">
    //                     <h2>description</h2>
    //                 </header>
    //                 <main className="description-main">
    //                     <p>{book.description}</p>
    //                 </main>
    //             </section>
    //         </section>
    //     </li>
    // );
};

export default ListItem;
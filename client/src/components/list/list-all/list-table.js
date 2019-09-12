import React from 'react';
import { Link } from 'react-router-dom';

import './list-table.css';

const ListTable = (props) => {
    return (
        <table className="list-table">
            <tbody>
                <tr>
                    <th width="40%">Name of list</th>
                    <th width="20%">Items</th>
                    <th width="20%">Total price</th>
                    <th width="20%">Delete</th>
                </tr>
                {
                    props.lists.map(list => (
                        <tr key={list._id}>
                            <td>
                                <Link to={`/lists/details/${list._id}`}>{list.title}</Link>
                            </td>
                            <td>{list.studentBooks.length} pcs</td>
                            {
                                list.studentBooks.length
                                    ? <td>
                                        {list.studentBooks.reduce((acc, sb) => acc + sb.price, 0).toFixed(2)} lv.
                                        </td>
                                    : <td>0 lv.</td>
                            }
                            <td>
                                <button className="btn delete-btn" onClick={() => props.deleteList(list._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default ListTable;
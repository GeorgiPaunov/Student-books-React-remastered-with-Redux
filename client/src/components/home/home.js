import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'; 
import { addToListAction } from '../../actions/list-actions';

import BookAll from '../book/book-all/book-all';
import ListSelect from '../list/list-select/list-select';

const Home = (props) => {
    const listRef = React.createRef();

    function getListId() {
        return listRef.current.giveListId();
    }

    function addToList(bookId) {
        const listId = getListId();

        if (!listId) {
            toast.error("Select a valid list!");
        } else {
            const data = { listId, bookId };

            props.addBookToList(data);
        }
    }

    return (
        <div className="home">
            {
                sessionStorage.getItem("username") 
                    ? <ListSelect ref={listRef}/> 
                    : null
            }
            <BookAll {...props} addToList={addToList}/>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addBookToList: (data) => dispatch(addToListAction(data))
    };
}

export default connect(null, mapDispatchToProps)(Home);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListDetailsAction, removeFromListAction } from '../../../actions/list-actions';

import ListItem from './list-item';

class ListDetails extends Component {
    removeFromList = (bookId) => {
        const listId = this.props.match.params.id;
        const data = { listId, bookId };

        this.props.removeBookFromList(data)
            .then(() => {
                this.props.fetchDetails(listId)
                    .then(() => {
                        if (!this.props.fetchSuccess) {
                            this.props.history.push("/");
                        }
                    });
            });
    }

    render() {
        const { list, isLoading } = this.props;

        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        if (!list.studentBooks) {
            return null;
        }

        if (!list.studentBooks.length) {
            return <h3>There are currently no student books in this list</h3>;
        }

        return(
            <div className="list">
                <h1>{list.title}</h1>
                <ul className="list-items">
                    {
                        list.studentBooks.sort((a, b) => a.subject.localeCompare(b.subject) || a.grade - b.grade)
                            .map(book => <ListItem key={book._id} {...book} removeFromList={this.removeFromList}/>)
                    }
                </ul>
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

function mapsStateToProps(state) {
    return {
        list: state.fetchListDetailsReducer.list,
        isLoading: state.fetchListDetailsReducer.isLoading,
        fetchSuccess: state.fetchListDetailsReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDetails: (id) => dispatch(fetchListDetailsAction(id)),
        removeBookFromList: (data) => dispatch(removeFromListAction(data)) 
    };
}

export default connect(mapsStateToProps, mapDispatchToProps)(ListDetails);
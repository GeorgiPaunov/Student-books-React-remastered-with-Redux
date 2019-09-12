import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListsAction, deleteListAction } from '../../../actions/list-actions';

import ListTable from './list-table';

class ListAll extends Component {
    deleteList = (id) => {
        this.props.deleteList(id)
            .then(() => {
                if (this.props.deleteSuccess) {
                    this.props.fetchLists();
                }
            });
    }

    render() {
        const { lists, isLoading } = this.props;

        if (isLoading) {
            return <h2>Loading...</h2>
        }

        return (
            <div className="table">
                <h1>Your lists</h1>
                {
                    lists.length 
                        ? <ListTable {...this.props} lists={lists} deleteList={this.deleteList}/> 
                        : <h2>You have no lists</h2>
                }
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchLists();
    }
}

function mapStateToProps(state) {
    return {
        lists: state.fetchListsReducer.lists,
        isLoading: state.fetchListsReducer.isLoading,
        deleteSuccess: state.listReducer.success
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLists: () => dispatch(fetchListsAction()),
        deleteList: (id) => dispatch(deleteListAction(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAll);
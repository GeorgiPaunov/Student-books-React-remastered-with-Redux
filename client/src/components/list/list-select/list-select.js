import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchListsAction } from '../../../actions/list-actions';

class ListSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.giveListId = this.giveListId.bind(this);
    }

    handleChange(evt) {
        this.setState({
            value: evt.target.value
        });
    }

    giveListId() {
        return this.state.value;
    }

    render() {
        const { lists, isLoading } = this.props;

        if (isLoading) {
            return <h4>Loading lists...</h4>
        }

        return (
            <select className="list-select" value={this.state.value} onChange={this.handleChange}>
                <option value="" disabled>Choose a list</option>
                {
                    lists.map(list => <option key={list._id} value={list._id}>{list.title}</option>)
                }
            </select>
        );
    }
    

    componentDidMount() {
        this.props.fetchLists();
    }
}

function mapStateToProps(state) {
    return {
        lists: state.fetchListsReducer.lists,
        isLoading: state.fetchListsReducer.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLists: () => dispatch(fetchListsAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(ListSelect);
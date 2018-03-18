import React from 'react'
import { VisibilityFilters, setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';

const VisibilityFilterBar = ({setVisibilityFilter}) => (
    <div>
        <button onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>All</button>
        <button onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
        <button onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
    </div>
)
const mapDispatchToProps = dispatch => ({
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})
export default connect(null, mapDispatchToProps)(VisibilityFilterBar)
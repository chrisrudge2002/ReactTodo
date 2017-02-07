const {connect} = require('react-redux');
const React = require('react');

const actions = require('actions');

export const Search = React.createClass({
	render: function() {
		const {dispatch, searchText, showCompleted} = this.props;

		return (
			<div className="container__header">
				<div>
					<input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
						const searchTxt = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchTxt));
					}}
					/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
							dispatch(actions.toggleShowCompleted());
						}}
						/>
						Show completed todos
					</label>
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			searchText: state.searchText,
			showCompleted: state.showCompleted
		};
	}
)(Search);

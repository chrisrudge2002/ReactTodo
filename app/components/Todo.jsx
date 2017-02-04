const moment = require('moment');
const React = require('react');

const Todo = React.createClass({
	render: function() {
		const {id, text, completed, createdAt, completedAt} = this.props;
		const renderDate = () => {
			let message = 'Created ';
			let timestamp = createdAt;

			if (completed) {
				message = 'Completed ';
				timestamp = completedAt;
			}

			return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
		};

		return (
			<div onClick={() => {this.props.onToggle(id);}}>
				<input type="checkbox" checked={completed} readOnly ref="completed"/>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;

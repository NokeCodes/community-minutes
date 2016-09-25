import React from 'react';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';


export default React.createClass({
	propTypes: {
		whenSubmit: React.PropTypes.func.isRequired
	},
	render() {
		return (
			<TextField
				fullWidth={true}
				hintText={<Search />}
				onKeyDown={(e) => {(e.which === 13) ? this.props.whenSubmit(e) : undefined}}
			/>
		);
	}

});

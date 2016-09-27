import React from 'react';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import FlatButton from 'material-ui/FlatButton';


export default React.createClass({
	propTypes: {
		whenSubmit: React.PropTypes.func,
		onChange: React.PropTypes.func,
		onSort: React.PropTypes.func,
		data: React.PropTypes.array
	},
	render() {
		return (
			<div>
				<TextField
					fullWidth={true}
					hintText={<Search />}
					onChange={this.props.onChange}
					onKeyDown={(e) => {(e.which === 13) ? this.props.whenSubmit(e) : undefined}}
				/>
				<div>
					<FlatButton label="Sort by Date" value='date' onClick={this.props.onSort}/>
					<FlatButton label="Sort by Location" value='location' onClick={this.props.onSort}/>
				</div>
				{this.props.children}
			</div>
		);
	}

});

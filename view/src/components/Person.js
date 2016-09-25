import React from 'react';
import { Flex, Box } from 'reflexbox';
import Paper from 'material-ui/Paper';

const Person = React.createClass({
	getInitialState() {
		return {
			isActive: false,
		};
	},
	handleClick(element) {

	},
	render() {
		return (
			<div
				onClick={e => this.handleClick(e)}
			>
				{
					this.state.isActive
						? <PersonExpanded data={this.props.data}/>
						: <PersonCollapsed data={this.props.data}/>
				}
			</div>
		)
	}

});

const PersonCollapsed = ({data, numMeetings, lastMeeting}) => (
	<Flex col={12}>
		<Box col={3}>
			{data.name}
		</Box>
		<Box col={3}>
			{data.position}
		</Box>
		<Box col={3}>
			{numMeetings}
		</Box>
		<Box col={3}>
			{lastMeeting}
		</Box>
	</Flex>
);

const PersonExpanded = ({data, numMeetings, lastMeeting}) => (
	<Flex col={12}>
		<PersonCollapsed />
		<Box col={3}>
			Name
		</Box>
		<Box col={3}>
			Position
		</Box>
		<Box col={3}>
			Num Meetings Attended
		</Box>
		<Box col={3}>
			Last Meeting Attedned
		</Box>
	</Flex>
);
PersonExpanded.propTypes = {
	data: React.PropTypes.object.isRequired
};
PersonCollapsed.propTypes = {
	data: React.PropTypes.object.isRequired
};
Person.propTypes = {
	data: React.PropTypes.object.isRequired
}
export {PersonExpanded, PersonCollapsed, Person};

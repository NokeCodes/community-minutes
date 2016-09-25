import React from 'react';
import {Card, CardHeader, CardText } from 'material-ui/Card';
import Attendance from './Attendance';
import Movements from './Movements';


const Meeting = ({meeting, attendees, movements, route, style}) => (
	<Card style={{margin: '15px'}}>
		<CardHeader
			title={`${meeting.date} - ${meeting.place}`}/>
		<CardText>
			<h2>Description </h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			{attendees ? <Attendance attendees={attendees} /> : null }
			{movements ? <Movements movements={movements} /> : null }
		</CardText>
	</Card>
);

Meeting.propTypes = {
	meeting: React.PropTypes.object
};

export default Meeting;

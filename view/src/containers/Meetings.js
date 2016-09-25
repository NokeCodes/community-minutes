import React from 'react';
import Meeting from '../components/Meeting';
import data from '../config/data';

export default React.createClass({
	renderMeetings(data) {
		return data.map((e,i) => {
			const {date, place, attendance, movements} = e
			return (
				<Meeting
					key={i}
					meeting={{place, date}}
					attendees={attendance}
					movements={movements}
				/>
			)
		})
	},
	render() {
		return (
			<div>
				{this.renderMeetings(data)}
			</div>
		);
	}
});

import React from 'react';
import {Person} from './Person';
import InsetWrapper from './InsetWrapper';
import _ from 'lodash';

const Attendance = ({attendees}) => {
	const present = _.find(attendees, obj => { return obj.present; });
	const absent = _.find(attendees, obj => { return !obj.present; });
console.log(absent);
	return (
		<div>
			<InsetWrapper Container={Person} title='Present Attendees' data={present} />
			{absent && <InsetWrapper Container={Person} title='Absent Attendees' data={absent} />}
		</div>
	)
};

Attendance.propTypes = {
	attendees: React.PropTypes.array.isRequired
};

export default Attendance;

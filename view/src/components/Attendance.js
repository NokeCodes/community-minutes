import React from 'react';
import {Person} from './Person';
import InsetWrapper from './InsetWrapper';
import _ from 'lodash';

const Attendance = ({attendees}) => {
	const present = _.filter(attendees, ['present', true]);
	const absent = _.filter(attendees, ['present', false])

	return (
		<div>
			{present.length > 0 && <InsetWrapper Container={Person} title='Present Attendees' data={present} />}
			{absent.length > 0 && <InsetWrapper Container={Person} title='Absent Attendees' data={absent} />}
		</div>
	)
};

Attendance.propTypes = {
	attendees: React.PropTypes.array.isRequired
};

export default Attendance;

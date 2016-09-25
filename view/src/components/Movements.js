import React from 'react';
import Movement from './Movement';
import InsetWrapper from './InsetWrapper';

const Movements = ({movements}) => {
	if (movements) {
		return (
			<InsetWrapper  Container={Movement} title='Movements' data={movements}/>
		)
	} else {
		return 'No Data'
	}
}


Movements.propTypes = {
	movements: React.PropTypes.array.isRequired
};

export default Movements;

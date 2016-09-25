import React from 'react';
import {Flex, Box} from 'reflexbox';
import Paper from 'material-ui/Paper';
// import InsetWrapper from './InsetWrapper';

const Movement = ({data}) => {
	return (
			<Flex col={12}>
				<Box col={12}>
					<h4>{`${data.title} - ${data.id}`} </h4>
					<p>{data.description} </p>
				</Box>
				<Box col={12}>
					<p>Votes go here</p>
				</Box>
			</Flex>
	);
}
Movement.propTypes = {
	data: React.PropTypes.object.isRequired
};

export default Movement;

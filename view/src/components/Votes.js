import React from 'react';
import {Flex, Box} from 'reflexbox';

const Votes = ({votes}) => (
	<Flex col={12}>
		<Box col={4}>
			Name
		</Box>
		<Box col={4}>
			Aye
		</Box>
		<Box col={4}>
			Nay
		</Box>
		{votes.map( (e,i) => {
			return (
				<Flex>
					<Box col={4}>{e.name}</Box>
					<Box col={4}>{e.aye ? '*' : null}</Box>
					<Box col={4}>{e.nay ? '*' : null}</Box>
				</Flex>
			)
		})}
	</Flex>
);

Votes.propTypes = {
	movement: React.PropTypes.object.isRequired
};

export default Votes;

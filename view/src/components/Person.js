import React from 'react';
import { ListItem } from 'material-ui/List';

const Person = ({data, i, isOpen, open}) => {
	return (
		<ListItem
			value={i}
			key={i}
			primaryText={data.name}
			secondaryText={data.position}
			primaryTogglesNestedList={true}
			nestedItems={
				[
					{title: 'title 1', description:'desc'},{title: 'title 2', description:'desc2'}
				].map( (e, i) => {
					return (
						<ListItem
							key={i}
							value={e.title}
							primaryText={`Meeting ${e.title}`}
							secondaryText="<Link ? /> "
						/>
					)})
			}>
		</ListItem>
	)
};

Person.propTypes = {
	data: React.PropTypes.object.isRequired,
	key: React.PropTypes.number
}
export {Person};

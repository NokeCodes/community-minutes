import React from 'react';

const Title = ({title}) => (
	<h2>{title}</h2>
);

Title.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default Title;

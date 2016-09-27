import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {CardText, CardHeader} from 'material-ui/Card';

const Loading = ({loading, children}) => {
	if (loading) {
		return (
			<CardText>
				<CircularProgress size={2}>
				</CircularProgress>
			</CardText>
		)} else {
			return (<div>{children}</div>)
		}
};

Loading.propTypes = {
	loading: React.PropTypes.bool.isRequired
};

export default Loading;

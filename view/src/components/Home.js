import React from 'react';
import {Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';

const Home = ({props}) => (
	<div>
		<Card>
			<CardHeader title="Noke Votes" />
			<TextField
				fullWidth={true}
				hintText={<Search />}></TextField>
				<CardText>
				Intro TExt
				</CardText>
		</Card>
	</div>
);

// Home.propTypes = {
// 	: React.PropTypes.
// };

export default Home;

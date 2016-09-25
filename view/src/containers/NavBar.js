import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';
import {Flex, Box } from 'reflexbox';
import SearchContainer from './SearchContainer';

export default React.createClass({
	getDefaultProps() {
		return {
			location: {},
			params: {},
			menu:[]
		};
	},
	getInitialState() {
		return {
			activeIndex: 0,
			loading: true
		};
	},
	componentDidMount() {
		this.setState({
			loading: false
		})
	},
	contextTypes: {
		router: React.PropTypes.object
	},
	handleSubmit(e) {
		this.context.router.push({
			pathname: '/'
		})
	},
	render() {
		return (
			<Paper>
				<Flex col={12}>
					{this.props.menu.map((element,i) => {
						return (
							<Box key={i} col={4}>
								<Link key={i} to={element.path}>{element.title}</Link>
							</Box>
						)
					})}
				</Flex>
				<Flex col={12}>
					<SearchContainer
						whenSubmit={this.handleSubmit}
					/>
				</Flex>
			</Paper>
		);
	}

});

import React from 'react';
import Title from './Title';
import _ from 'lodash';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

export default class InsetWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
		props = {
			title: '',
			data: []
		}
	}

	propTypes: {
			title: React.PropTypes.string,
			body: React.PropTypes.string,
			Container: React.PropTypes.func,
			data: React.PropTypes.any,
	}

	render() {
		if (_.isArray(this.props.data)) {
			return (
				<div>
					<List defaultValue={0}>
						{this.props.data.map((e, i) => {
							return (
								<this.props.Container key={i} isOpen={this.state.open} data={e} />
							)
						})}
					</List>
				</div>
			)
		} else if (this.props.data) {
			return (
				<div>
					<Title title={this.props.title} />
					<this.props.Container data={this.props.data} />
				</div>
			)
		} else {
			return (<div>'No Data'</div>);
		}
	}

}

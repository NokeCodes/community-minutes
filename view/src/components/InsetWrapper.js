import React from 'react';
import Title from './Title';
import _ from 'lodash';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {
    static propTypes = {
      children: React.PropTypes.node.isRequired,
      defaultValue: React.PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const InsetWrapper = ({title, body, Container, data}) => {
	// console.log(title);
	// console.log(body);
	// console.log(Container);
	// console.log(data);
	if (_.isArray(data)) {
		return (
			<div>
				<Title title={title} />
				<SelectableList>
					{data.map((e, i) => {
						return (
							<ListItem
								key={i}
								value={i}
								primaryText='test'>
								<Container data={e} />
							</ListItem>
						)
					})}
				</SelectableList>
			</div>
		)
	} else if (data) {
		return (<Container data={data} />)
	} else {
		return 'No Data';
	}
}
;

// InsetWrapper.propTypes = {
// 	title: React.PropTypes.string.isRequired,
// 	Container: React.PropTypes.func.isRequired,
// 	body: React.PropTypes.string,
// 	data: React.PropTypes.oneOfType([
// 		React.PropTypes.array,
// 		React.PropTypes.object
// 	])
// };

export default InsetWrapper;
